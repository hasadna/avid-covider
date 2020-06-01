import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { ContentManager, ScriptRunnerNew as ScriptRunnerImpl } from 'hatool';
import { HttpClient } from '@angular/common/http';
import { map, catchError, first, switchMap } from 'rxjs/operators';
import { VERSION, PRODUCTION } from '../constants';
import { script } from '../script';
import { of, Subscription } from 'rxjs';
import { ReportStoreService } from '../report-store.service';
import { NotificationService } from '../notification.service';
import { SourceService } from '../source.service';
import { citySuggestions } from '../city-suggestions';
import { MapService } from '../map.service';
import { LayoutService } from '../layout.service';
import { BannerComponent } from '../banner/banner.component';
import { ShareService } from '../share.service';
import { ReminderWidgetComponent } from '../reminder-widget/reminder-widget.component';
import { RemindersService } from '../reminders.service';
import { AppinstallService } from '../appinstall.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.less']
})
export class ChatPageComponent implements OnInit, AfterViewInit {

  started = false;
  subscription: Subscription = null;
  content: ContentManager;
  runner: ScriptRunnerImpl;

  toasterMessage = null;
  bannerMessage = null;
  bannerButtonMessage = null;
  reminderWidgetOptions = null;
  @ViewChild(BannerComponent) banner: BannerComponent;
  @ViewChild(ReminderWidgetComponent) reminderWidget: ReminderWidgetComponent;

  @ViewChild('uploadFileText') uploadFileText: ElementRef;
  @ViewChild('uploadedFileText') uploadedFileText: ElementRef;
  @ViewChild('notUploadedFileText') notUploadedFileText: ElementRef;
  @ViewChild('inputPlaceholder') inputPlaceholder: ElementRef;
  @ViewChild('fixmeMessage') fixmeMessage: ElementRef;

  @Output() done = new EventEmitter<string>();

  constructor(private http: HttpClient,
              private storage: ReportStoreService,
              private notifications: NotificationService,
              private source: SourceService,
              private mapService: MapService,
              public layout: LayoutService,
              private shareService: ShareService,
              private reminders: RemindersService,
              private appinstall: AppinstallService,
              @Inject(LOCALE_ID) private locale) {}

  init() {
    this.content = new ContentManager();
    this.runner = new ScriptRunnerImpl(this.http, this.content, this.locale);
    this.runner.timeout = environment.chatRunnerTimeout;
    this.runner.debug = false;
    this.runner.fixme = () => {
      this.restart();
    };
  }

  prepareToSave(record) {
    // filter records fields, to save those that do not start with '_'
    const result = {};
    for (const [key, value] of Object.entries(record)) {
      if (key[0] !== '_') {
        result[key] = value;
      }
    }
    return result;
  }

  augmentPayload(payload) {
    payload['version'] = VERSION;
    payload['_cityTownSuggestions'] = null;
    return payload;
  }

  ngAfterViewInit() {
    this.content.sendButtonText = '';
    this.content.uploadFileText = this.uploadFileText.nativeElement.innerHTML;
    this.content.uploadedFileText = this.uploadedFileText.nativeElement.innerHTML;
    this.content.notUploadedFileText = this.notUploadedFileText.nativeElement.innerHTML;
    this.content.inputPlaceholder = this.inputPlaceholder.nativeElement.innerHTML;
    this.content.fixmeMessage = this.fixmeMessage.nativeElement.innerHTML;

    setTimeout(() => {
      this.start();
    }, 0);

  }

  ngOnInit() {
    this.init();
  }

  restart() {
    const state = this.runner.state;
    this.subscription.unsubscribe();
    this.started = false;
    this.init();
    this.runner.state = state;
    this.ngAfterViewInit();
  }

  get(obj: any, field) {
    const parts = field.split('.');
    for (const part of parts) {
        obj = obj[part] || {};
    }
    if (Object.entries(obj).length > 0) {
        return obj;
    }
    return null;
  }

  fillIn(record: any, message: string) {
    return message.replace(
        RegExp('({{([a-zA-Z_.0-9]+)}})', 'g'),
        (match, p1, p2) => {
            return this.get(record, p2) || '';
        }
    );
}

  selectFields(record, fields) {
    const ret = {};
    for (const re of fields) {
      const regexp = new RegExp('^' + re + '$');
      const keys = Object.keys(record);
      for (const key of keys) {
        if (regexp.test(key)) {
          ret[key] = record[key];
        }
      }
    }
    return ret;
  }

  makeUid() {
    let result = '';
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charNum = charset.length;
    for (let i = 0; i < 6; i++) {
      result += charset.charAt(Math.floor(Math.random() * charNum));
    }
    return result;
  }

  start() {
    if (this.started) {
      return;
    }
    this.started = true;
    this.subscription = this.runner.run(
      script,
      0,
      {
        clear: () => {
          this.runner.record = Object.assign({}, this.storage.device);
        },
        load_local_storage: (record: any) => {
          record._existing_user = this.storage.reports.length > 0 ? 'returning' : 'new';
        },
        fetch_previous_reports: (same_address_text, new_address_text, done_text) => {
          const aliases = {};
          const sliceIdx = PRODUCTION ? 10 : 16;
          const today_prefix = (new Date()).toISOString().slice(0, sliceIdx);
          const today_aliases = {};
          let reported_today = false;
          for (const report of this.storage.reports) {
            if (!this.storage.device.originalEngagementSource &&
                report[1].engagementSource) {
              this.storage.device.originalEngagementSource = report[1].engagementSource;
            }
            if (!report[1].alias) {
              continue;
            }
            const alias = report[1].alias;
            aliases[alias] = report;
            if (report[0].indexOf(today_prefix) === 0) {
              today_aliases[alias] = true;
            }
          }
          const options = [];
          const aliases_list = Object.keys(aliases);
          this.storage.device.num_aliases = aliases_list.length;
          for (const alias of aliases_list) {
            const option: any = {};
            if (today_aliases[alias]) {
              option.class = 'disabled';
              reported_today = true;
            }
            Object.assign(option, {
              show: alias,
              value: this.selectFields(aliases[alias][1], [
                'alias', 'age', 'sex', 'city_town', 'street', 'medical_staff_member', 'is_assisted_living',
                'precondition.*', 'hospitalization.*', 'covid_.*', 'insulation.*', 'symptoms_.*_duration',
                'general_feeling', 'routine.*', '_household.*', '_public_service_last_reported_yes', 'uid'
              ])
            });
            options.push(option);
          }
          const lastReport = this.storage.reports.length - 1;
          options.push({
            show: this.fillIn(this.storage.reports[lastReport][1], same_address_text),
            value: this.selectFields(this.storage.reports[lastReport][1], [
              'city_town', 'street'
            ])
          });
          options.push({
            show: new_address_text,
            value: {}
          });
          if (reported_today) {
            options.push({
              show: done_text,
              value: 'done',
              steps: [
                {pop: 'default'}
              ]
            });
          }
          return options;
        },
        ensure_uid: (record) => {
          if (!record['uid']) {
            record['uid'] = this.makeUid();
          }
          if (!this.storage.device.main_uid) {
            this.storage.device.main_uid = record['uid'];
            this.storage.device.main_age = record['age'];
            this.storage.device.main_city = record['city'];
          }
        },
        set_flag: (record: any, varname) => {
          record[varname] = true;
        },
        flag_from_var: (record: any, varname) => {
          varname = varname || '_var';
          if (record[varname]) {
            record[record[varname]] = true;
            record[varname] = null;
          }
        },
        update_from_selection: (record: any, varname) => {
          Object.assign(record, record[varname]);
          delete record[varname];
        },
        fetch_household_data: (record: any) => {
          try {
            let _household_adults = null;
            let _household_minors = null;
            let _household_data_available = null;
            for (const report of this.storage.reports) {
              const r = report[1];
              if ((r.city_town === record.city_town) && (r.street === record.street) ) {
                try {
                  _household_adults = parseInt(r._household_adults, 10);
                  _household_minors = parseInt(r._household_minors, 10);
                  _household_data_available = !!r._household_data_available;
                } catch (e) {
                  console.log('Bad old report data', r);
                }
              }
            }
            Object.assign(record, {_household_adults, _household_minors, _household_data_available});
          } catch (err) {
            console.error(`household past data check failed: ${err}`);
          }
        },
        handle_no_covid: (record: any) => {
          record.covid_positive = record.covid_positive === 'true';
          if (!record.covid_positive) {
            if (record.hospitalization_status) {
              record.hospitalization_status = false;
            }
            for (const k of Object.keys(record)) {
              if (k.indexOf('symptoms_') >= 0 && k.indexOf('_duration') >= 0) {
                delete record[k];
              }
            }
          }
        },
        clear_insulation_status: (record: any) => {
          record.hospitalization_status = record.hospitalization_status === 'true';
          if (record.hospitalization_status && record.insulation_status) {
            record.insulation_status = 'none';
            record.insulation_reason = 'none';
          }
        },
        clear_insulation_reason: (record: any) => {
          record.insulation_reason = record.insulation_reason || 'none';
          if (record.insulation_status === 'none') {
            record.insulation_reason = 'none';
          }
        },
        need_to_ask_about_routine: (record: any) => {
          const routine_last_asked = record.routine_last_asked || 0;
          const timeout = PRODUCTION ? 86400 * 7 * 1000 : 7 * 60 * 1000;
          const now = Date.now().valueOf();
          if (now > routine_last_asked + timeout) {
            record.routine_last_asked = now;
            return true;
          }
          return false;
        },
        save_public_service_data: (record: any) => {
          if (record._served_public_last_fortnight) {
            record._public_service_last_reported_yes = Date.now().valueOf();
          }
          const last_yes = record._public_service_last_reported_yes || 0;
          const timeout = PRODUCTION ? 86400 * 14 * 1000 : 14 * 60 * 1000;
          const now = Date.now().valueOf();

          record.served_public_last_fortnight = (now < last_yes + timeout);
          console.log('SERVED MORE THAN 10 PEOPLE:', record.served_public_last_fortnight);
          if (!!record._public_service_last_reported_yes) {
            console.log('LAST YES REPORT TIME', new Date(record._public_service_last_reported_yes).toISOString());
          }
        },
        calculate_met_daily: (record: any) => {
          try {
            const _household_data_available = true;
            if (record._met_above_18 || record._met_above_18 === 0 || record._met_above_18 === '0') {
              let met_above_18 =
                parseInt(record._household_adults || 0, 10) +
                parseInt(record._met_above_18 || 0, 10);
              if (!!record._is_adult) {
                met_above_18 -= 1;
              }
              Object.assign(record, {met_above_18, _household_data_available});
            }
            if (record._met_under_18 || record._met_under_18 === 0 || record._met_under_18 === '0') {
              let met_under_18 =
                parseInt(record._household_minors || 0, 10) +
                parseInt(record._met_under_18 || 0, 10);
              if (!record._is_adult) {
                met_under_18 -= 1;
              }
              Object.assign(record, {met_under_18, _household_data_available});
            }
            console.log('MET WITH ADULTS:', record.met_above_18);
            console.log('MET WITH KIDS:', record.met_under_18);
          } catch (e) {
            console.log('Failed to calculate met daily', e);
          }
        },
        is_adult: (record: any) => {
          try {
            const age = parseInt(record.age, 10);
            console.log('IS ADULT', age, '->', age >= 18);
            return age >= 18;
          } catch (err) {
            console.error(`Age check error: ${err}.\n Age value: ${record.age}`);
          }
        },
        is_old: (record: any) => {
          try {
            const age = parseInt(record.age, 10);
            return age >= 65;
          } catch (err) {
            console.error(`Age check error: ${err}.\n Age value: ${record.age}`);
          }
        },
        calculate_alias: (record, male_alias, female_alias, other_alias) => {
          if (record.sex === 'male') {
            return this.fillIn(record, male_alias);
          } else if (record.sex === 'female') {
              return this.fillIn(record, female_alias);
          } else {
            return this.fillIn(record, other_alias);
          }
        },
        combine_location: (record, location_text) => {
          return this.fillIn(record, location_text).trim();
        },
        prepare_city_town_suggestions: () => {
          return citySuggestions[this.locale] || citySuggestions['en'];
        },
        share_action: async () => {
          if (this.shareService.shareWidgetSupported) {
            const shared = this.shareService.shareWidget()
              .then(() => {
                return 'shared';
              }, () => {
                return this.shareService.clipboardCopy();
              });
            if (shared === 'error') {
              return this.shareService.clipboardCopy();
            }
            return shared;
          }
          return this.shareService.clipboardCopy();
        },
        toaster: (message) => {
          this.toasterMessage = message;
        },
        banner: async (message, buttonMessage?) => {
          this.bannerMessage = message;
          this.bannerButtonMessage = buttonMessage;
          return new Promise((resolve, reject) => {
            this.banner.result.pipe(first()).subscribe((value) => {
              resolve(value);
            });
          });
        },
        reminder_status: (record) => {
          const has_reminder = record.action_reminder_wanted === 'already_set' || this.reminders.isSourceReminder();
          return has_reminder ? 'not-required' : 'required';
        },
        reminder_choose_method_show_widget: async (record) => {
          const options = this.reminders.widgetOptions(record);
          this.reminderWidgetOptions = options;
          return new Promise((resolve, reject) => {
            this.reminderWidget.select.pipe(first()).subscribe((selected) => {
              resolve(selected);
            });
          });
        },
        install_notification: async () => {
          await this.notifications.addNotification();
        },
        install_app: async (record) => {
          if (record.action_reminder_selected === 'android-app') {
            await this.appinstall.prompt('play');
          } else if (record.action_reminder_selected === 'iphone-app') {
            await this.appinstall.prompt('itunes');
          }
        },
        install_calendar: () => {
          window.open('assets/corona_reminder.ics', '_blank');
        },
        install_telegram: () => {
          window.open(`https://t.me/coronaisrael_reminder_bot?start=${this.locale}`, '_blank');
        },
        affiliate_alon_chen_prepare: (later_option) => {
          const aliases = {};
          const sliceIdx = PRODUCTION ? 10 : 16;
          const today_prefix = (new Date()).toISOString().slice(0, sliceIdx);
          for (const report of this.storage.reports) {
            if (!report[1].alias) {
              continue;
            }
            const alias = report[1].alias;
            if (report[0].indexOf(today_prefix) === 0) {
              aliases[alias] = report;
            }
          }
          const options = [];
          const aliases_list = Object.keys(aliases);
          for (const alias of aliases_list) {
            const option: any = {};
            Object.assign(option, {
              show: alias,
              value: aliases[alias][1].uid
            });
            options.push(option);
          }
          options.push({
            show: later_option, value: 'no-uid', steps: []
          });
          return options;
        },
        affiliate_alon_chen_action: (record, field_name) => {
          const links = {
            he: '1FAIpQLSfbO0mKvS5q5DFEjTrtP6nDsPjeCLjKNknX9Ywzwl7sSTl8jA/viewform?usp=pp_url&entry.356067021=',
            en: '1FAIpQLSd9HQDsN1WaikNr0QVrdnG7dKWuevbxR2L1v8Uh62mTHM6c4A/viewform?usp=pp_url&entry.101300820=',
            ar: '1FAIpQLSc0cz03mvaMdEnVqFkzBmmjX-EKWOzYYei2znOh_12yDkkOAA/viewform?usp=pp_url&entry.759991142=',
            es: '1FAIpQLSdTZcTd0dnv2ZFU-SZ0725qieDoE7ugAECFfQE1gICUm1d05A/viewform?usp=pp_url&entry.2037241339=',
            fr: '1FAIpQLSf6hU2H_JaiKMCWnGKptxLWFMdAZnUFuik_kIUiFPm2uqp8xQ/viewform?usp=pp_url&entry.1895607011=',
            ru: '1FAIpQLSfNyO_jtY0K8dWCJ4UvceKgAgcs-BZ4khBYdW55wgq8rFLmnw/viewform?usp=pp_url&entry.2022038576='
          };
          const uid = record[field_name];
          const prefix = 'https://docs.google.com/forms/d/e/';
          const link = prefix + (links[this.locale] || links.he) + uid;
          window.open(link, '_blank');
        },
        save_report: (record) => {
          let payload = Object.assign({}, record);
          payload = this.augmentPayload(payload);
          this.storage.addReport(payload);
          payload = this.prepareToSave(payload);
          let obs = null;
          if (PRODUCTION) {
            obs = this.http.post('https://europe-west2-hasadna-general.cloudfunctions.net/avid-covider-secure', payload);
          } else {
            console.log('WOULD SEND', payload);
            window['wouldSend'] = payload;  // used by protractor (e2e testing)
            obs = of({success: true});
          }
          obs.pipe(
            catchError(() => of({success: false})),
            map((response: any) => response.success)
          ).subscribe((success) => {
            console.log('saved, success=' + success);
          });
          this.mapService.reportedToday = true;
        }
      },
      (key, value, record) => {}
    ).pipe(
      map(() => {
        let payload = Object.assign({}, this.runner.record);
        payload = this.augmentPayload(payload);
        payload = this.prepareToSave(payload);
        this.storage.saveDevice(payload);
        return payload;
      }),
      switchMap((payload) => {
        if (PRODUCTION) {
          return this.http.post('https://europe-west2-hasadna-general.cloudfunctions.net/avid-covider-secure-devices', payload);
        } else {
          console.log('DEVICE STATE', payload);
          return of({success: true});
        }
      }),
      catchError(() => of({success: false})),
      map((response: any) => response.success)
    ).subscribe((success) => {
      console.log('Reported device success', success);
      this.done.emit();
    });
  }

}
