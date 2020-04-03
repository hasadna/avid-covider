import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID, EventEmitter, Output, Input } from '@angular/core';
import { ContentManager, ScriptRunnerNew as ScriptRunnerImpl } from 'hatool';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { VERSION } from '../constants';
import { script } from '../script';
import { of, Subscription } from 'rxjs';
import { ReportStoreService } from '../report-store.service';
import { NotificationService } from '../notification.service';
import { SourceService } from '../source.service';
import { citySuggestions } from '../city-suggestions';

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

  @Input() layout: string = null;;
  @Output() done = new EventEmitter<void>();

  constructor(private http: HttpClient,
              private storage: ReportStoreService,
              private notifications: NotificationService,
              private source: SourceService,
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
        load_local_storage: (record: any) => {
          record._existing_user = this.storage.reports.length > 0 ? 'returning' : 'new';
        },
        fetch_previous_reports: (same_address_text, new_address_text) => {
          const aliases = {};
          const sliceIdx = window.location.hostname === 'coronaisrael.org' ? 10 : 15;
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
                'alias', 'age', 'sex', 'city_town', 'street', 'precondition.*', 'insulation.*', 'exposure.*', 'general_feeling'
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
        }
      },
      (key, value, record) => {}
    ).pipe(
      map(() => {
        const payload = this.prepareToSave(this.runner.record);
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
        this.storage.addReport(payload);
        return payload;
      }),
      switchMap((payload) => {
        return new Promise((resolve, reject) => {
          try {
            window['grecaptcha'].execute(window['RECAPTCHA_SITE_KEY'], {action: 'submit'})
            .then(
              (token) => {
                payload['recaptcha'] = token;
                resolve(payload);
              },
              () => {
                resolve(payload);
              }
            );
          } catch (e) {
            resolve(payload);
          }
        });
      }),
      switchMap((payload) => {
        if (window.location.hostname === 'coronaisrael.org') {
          return this.http.post('https://europe-west2-hasadna-general.cloudfunctions.net/avid-covider-secure', payload);
        } else {
          console.log('WOULD SEND', payload);
          return of({success: true});
        }
      }),
      catchError(() => of({success: false})),
      map((response: any) => response.success)
    ).subscribe((success) => {
      console.log('done, success=' + success);
      this.started = false;
      this.done.emit();
    });
  }

}
