import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { ContentManager, ScriptRunnerNew as ScriptRunnerImpl } from 'hatool';
import { HttpClient } from '@angular/common/http';
import { map, catchError, first } from 'rxjs/operators';
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
    this.runner.timeout = 250;
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
          this.runner.record = {};
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
          for (const alias of Object.keys(aliases)) {
            const option: any = {};
            if (today_aliases[alias]) {
              option.class = 'disabled';
              reported_today = true;
            }
            Object.assign(option, {
              show: alias,
              value: this.selectFields(aliases[alias][1], [
                'alias', 'age', 'sex', 'city_town', 'street', 'medical_staff_member',
                'precondition.*', 'insulation.*', 'exposure.*', 'general_feeling',
                '_household.*', '_public_service.*'
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
        fetch_covid19_check_question_data: (record: any) => {
          try {
            let _covid19_check_question_status = 'dont_ask';
            let _covid19_check_question_date = 0;
            let _covid19_check_date = 0;
            let covid19_check_date = null;
            let _covid19_check_result = null;

            for (const report of this.storage.reports) {
              const r = report[1];
              if (r.alias === record.alias) {
                try {
                  _covid19_check_question_date = parseInt(r._covid19_check_question_date, 10);
                  _covid19_check_date = parseInt(r._covid19_check_date, 10);
                  covid19_check_date = r.covid19_check_date;
                  _covid19_check_result = r._covid19_check_result;
                } catch (err) {
                  console.error(`Bad covid19 old report data ${err}, ${r}`);
                }
              }
            }
            const MULTIPLIER = PRODUCTION ? 86400 * 1000 : 60 * 1000;
            const question_period = MULTIPLIER * 7;   // question's interval (days)
            const missing_question_period = MULTIPLIER * 1;   // question's interval (days)
            const pending_result_timeout = MULTIPLIER * 14; // missing results interval (days)
            const TODAY = Date.now().valueOf();

            if (_covid19_check_question_date) {
              console.log(`Last covid19 Question was asked on ${new Date(_covid19_check_question_date).toISOString()}`);
            }
            if (_covid19_check_result === 'positive') { // Positive - never ask
              console.log('covid19 check question: will not ask due to "positive" report');
              _covid19_check_question_status = 'dont_ask';
            } else if (!_covid19_check_question_date) { // Never asked - always ask
              _covid19_check_question_status = 'first_time';
            } else if (_covid19_check_result === 'result_missing') { // Missing result
              if (!!_covid19_check_date &&
                  ((TODAY - _covid19_check_question_date) > missing_question_period) &&
                  ((TODAY - _covid19_check_date) < pending_result_timeout)) {
                    // we didn't ask in last day, it wasn't 2 weeks since the check date
                    _covid19_check_question_status = 'missing_result';
                    record._covid19_check_question_status_missing = true;
              }
            } else if (TODAY - _covid19_check_question_date > question_period) {
              // We didn't ask for more than a week, let's ask again
              console.log('covid19 check question: will ask since one week passed');
              _covid19_check_question_status = 'ask_again';
            } else {
              // We couldn't find a reason to ask
              console.log('covid19 check question: no reason to ask user');
              _covid19_check_question_status = 'dont_ask';
            }
            if (_covid19_check_question_status !== 'dont_ask') {
              // In case we're going to ask, set the question date to now
              _covid19_check_question_date = TODAY;
            }

            Object.assign(record, {
              _covid19_check_question_status,
              _covid19_check_question_date,
              _covid19_check_date,
              covid19_check_date,
              _covid19_check_result
            });
          } catch (err) {
            console.error(`covid19 check question failed: ${err}`);
          }
        },
        save_covid19_check_question_data: (record: any) => {
          if (record.covid19_check_date) {
            if (!PRODUCTION) {
              // Reset the check date otherwise testing this won't be possible
              record.covid19_check_date = (new Date()).toISOString();
            }
            try {
              record._covid19_check_date = Date.parse(record.covid19_check_date).valueOf();
            } catch (e) {
              console.log('Failed to parse date', record.covid19_check_date, e);
            }
          }
          record.covid19_check_result = record._covid19_check_result;
        },
        fetch_public_service_data: (record: any) => {
          try {
            let _public_service_last_reported_yes = null;
            let _public_service_last_reported = null;
            let _public_service_status = null;
            for (const report of this.storage.reports) {
              const r = report[1];
              if (r.alias === record.alias) {
                try {
                  _public_service_last_reported_yes = parseInt(r._public_service_last_reported_yes, 10);
                  _public_service_last_reported = parseInt(r._public_service_last_reported, 10);
                } catch (e) {
                  console.log('Bad old report data', r);
                }
              }
            }
            const timeout = PRODUCTION ? 86400 * 7 * 1000 : 7 * 60 * 1000;
            if (_public_service_last_reported_yes) {
              console.log('LAST YES REPORT TIME', new Date(_public_service_last_reported_yes).toISOString());
            }
            if (_public_service_last_reported) {
              console.log('LAST REPORT TIME', new Date(_public_service_last_reported).toISOString());
              console.log('NEXT REPORT TIME', new Date(_public_service_last_reported + timeout).toISOString());
            }
            if (!_public_service_last_reported || ((Date.now().valueOf() - _public_service_last_reported) > timeout)) {
              console.log('PSD required');
              _public_service_status = 'required';
            } else {
              _public_service_status = 'valid';
              console.log('PSD valid');
            }
            if (!!_public_service_last_reported_yes &&
                  ((Date.now().valueOf() - _public_service_last_reported_yes) < 2 * timeout)) {
              record.served_public_last_fortnight = true;
              console.log('SERVED MORE THAN 10 PEOPLE IN PAST 2 WEEKS:', record.served_public_last_fortnight);
            }
            Object.assign(record, {_public_service_status, _public_service_last_reported, _public_service_last_reported_yes});
          } catch (err) {
            console.error(`psd past data check failed: ${err}`);
          }
        },
        save_public_service_data: (record: any) => {
          record._public_service_last_reported = Date.now().valueOf();
          if (record._served_public_last_fortnight) {
            record._public_service_last_reported_yes = Date.now().valueOf();
          }
          record.served_public_last_fortnight = !!record._served_public_last_fortnight || !!record.served_public_last_fortnight;
          console.log('SERVED MORE THAN 10 PEOPLE:', record.served_public_last_fortnight);
          if (!!record._public_service_last_reported_yes) {
            console.log('LAST YES REPORT TIME', new Date(record._public_service_last_reported_yes).toISOString());
          }
        },
        calculate_met_daily: (record: any) => {
          try {
            const _household_data_available = true;
            let met_above_18 =
              parseInt(record._household_adults || 0, 10) +
              parseInt(record._met_above_18 || 0, 10);
            let met_under_18 =
              parseInt(record._household_minors || 0, 10) +
              parseInt(record._met_under_18 || 0, 10);
            if (!!record._is_adult) {
              met_above_18 -= 1;
            } else {
              met_under_18 -= 1;
            }
            Object.assign(record, {met_under_18, met_above_18, _household_data_available});
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
        in_insulation: (record: any) => {
          return (record.exposure_status === 'insulation_with_family' || record.exposure_status === 'insulation');
        },
        clear_fields: (record: any, ...fields: string[]) => {
          for (const re of fields) {
            const regexp = new RegExp('^' + re + '$');
            const keys = Object.keys(record);
            for (const key of keys) {
              if (regexp.test(key)) {
                try {
                  delete record[key];
                } catch (e) {
                  console.log('Failed to delete key', key, 'from', record, ':', e);
                }
              }
            }
          }
        },
        calculate_alias: (record, male_alias, female_alias) => {
          if (record.sex === 'male') {
            return this.fillIn(record, male_alias);
          } else {
            return this.fillIn(record, female_alias);
          }
        },
        prepare_city_town_suggestions: () => {
          return citySuggestions[this.locale] || citySuggestions['en'];
        },
        show_map: () => {
          this.mapService.openMap();
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
        reminder_status: () => {
          return 'required';
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
        save_report: (record) => {
          let payload = Object.assign({}, record);
          payload['version'] = VERSION;
          payload['locale'] = this.locale;
          payload['layout'] = this.layout.layout;
          try {
            payload['numPreviousReports'] = this.storage.reports.length;
            if (this.storage.reports.length > 0) {
              payload['dateFirstReport'] = this.storage.reports[0][0];
            }
          } catch (e) {
            console.log('Failed to add stats');
          }
          payload['notificationsEnabled'] = this.notifications.canAddNotification;
          payload['engagementSource'] = this.source.getSource();
          payload['_cityTownSuggestions'] = null;
          this.storage.addReport(payload);
          payload = this.prepareToSave(payload);
          let obs = null;
          if (PRODUCTION) {
            obs = this.http.post('https://europe-west2-hasadna-general.cloudfunctions.net/avid-covider-secure', payload);
          } else {
            console.log('WOULD SEND', payload);
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
    ).subscribe((success) => {
      this.done.emit();
    });
  }

}
