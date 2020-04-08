import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID, EventEmitter, Output, Input } from '@angular/core';
import { ContentManager, ScriptRunnerNew as ScriptRunnerImpl } from 'hatool';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { VERSION, PRODUCTION } from '../constants';
import { script } from '../script';
import { of, Subscription } from 'rxjs';
import { ReportStoreService } from '../report-store.service';
import { NotificationService } from '../notification.service';
import { SourceService } from '../source.service';
import { citySuggestions } from '../city-suggestions';
import { MapService } from '../map.service';

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

  @ViewChild('uploadFileText') uploadFileText: ElementRef;
  @ViewChild('uploadedFileText') uploadedFileText: ElementRef;
  @ViewChild('notUploadedFileText') notUploadedFileText: ElementRef;
  @ViewChild('inputPlaceholder') inputPlaceholder: ElementRef;
  @ViewChild('fixmeMessage') fixmeMessage: ElementRef;

  @Input() layout: string = null;
  @Output() done = new EventEmitter<string>();
  nextStep = 'thankyou';

  constructor(private http: HttpClient,
              private storage: ReportStoreService,
              private notifications: NotificationService,
              private source: SourceService,
              private mapService: MapService,
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
        fetch_previous_reports: (same_address_text, new_address_text) => {
          const aliases = {};
          const sliceIdx = PRODUCTION ? 10 : 16;
          const today_prefix = (new Date()).toISOString().slice(0, sliceIdx);
          const today_aliases = {};
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
          console.log('OPTIONS', options);
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
            console.log('HOUSEHOLD', _household_adults, 'ADULTS', _household_minors, 'MINORS');
            Object.assign(record, {_household_adults, _household_minors, _household_data_available});
          } catch (err) {
            console.error(`household past data check failed: ${err}`);
          }
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
              if (!!_public_service_last_reported_yes &&
                  ((Date.now().valueOf() - _public_service_last_reported_yes) < 2 * timeout)) {
                record.served_public_last_fortnight = true;
                console.log('SERVED MORE THAN 10 PEOPLE IN PAST 2 WEEKS:', record.served_public_last_fortnight);
              }
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
          this.nextStep = 'fullscreenmap';
        },
        save_report: (record) => {
          let payload = Object.assign({}, record);
          payload['version'] = VERSION;
          payload['locale'] = this.locale;
          payload['layout'] = this.layout;
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
      this.done.emit(this.nextStep);
    });
  }

}
