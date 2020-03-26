import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { ContentManager, ScriptRunnerNew as ScriptRunnerImpl } from 'hatool';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { VERSION } from '../constants';
import { script } from '../script';
import { of } from 'rxjs';
import { ReportStoreService } from '../report-store.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.less']
})
export class ChatPageComponent implements OnInit, AfterViewInit {

  started = false;
  created = false;
  content: ContentManager;
  runner: ScriptRunnerImpl;

  @ViewChild('uploadFileText') uploadFileText: ElementRef;
  @ViewChild('uploadedFileText') uploadedFileText: ElementRef;
  @ViewChild('notUploadedFileText') notUploadedFileText: ElementRef;
  @ViewChild('inputPlaceholder') inputPlaceholder: ElementRef;

  @Output() done = new EventEmitter<void>();

  constructor(private http: HttpClient,
              private storage: ReportStoreService,
              private notifications: NotificationService,
              @Inject(LOCALE_ID) private locale) {}

  init() {
    this.content = new ContentManager();
    this.runner = new ScriptRunnerImpl(this.http, this.content, this.locale);
    this.runner.timeout = 250;
    this.runner.debug = true;
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
    this.content.uploadFileText = this.uploadFileText.nativeElement.innerHTML;
    this.content.uploadedFileText = this.uploadedFileText.nativeElement.innerHTML;
    this.content.notUploadedFileText = this.notUploadedFileText.nativeElement.innerHTML;
    this.content.inputPlaceholder = this.inputPlaceholder.nativeElement.innerHTML;

    setTimeout(() => {
      this.start();
    }, 0);

  }

  ngOnInit() {
    this.init();
    this.content.sendButtonText = '';
  }

  restart() {
    this.ngOnInit();
    this.ngAfterViewInit();
    this.runner.state = {};
    this.start();
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
            return this.get(record, p2) || p2;
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
    this.created = false;
    this.runner.run(
      script,
      0,
      {
        load_local_storage: (record: any) => {
          record._existing_user = this.storage.reports.length > 0 ? 'returning' : 'new';
        },
        fetch_previous_reports: (same_address_text, new_address_text) => {
          const aliases = {};
          for (const report of this.storage.reports) {
            if (!report[1].alias) {
              continue;
            }
            aliases[report[1].alias] = report;
          }
          const options = [];
          for (const alias of Object.keys(aliases)) {
            options.push({
              show: alias,
              value: this.selectFields(aliases[alias][1], [
                'alias', 'age', 'sex', 'city_town', 'street', 'precondition.*', 'insulation.*', 'exposure.*', 'general_feeling'
              ])
            });
          }
          options.push({
            show: this.fillIn(this.storage.reports[0][1], same_address_text),
            value: this.selectFields(this.storage.reports[0][1], [
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
                delete record[key];
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

      },
      (key, value, record) => {}
    ).pipe(
      switchMap(() => {
        const payload = this.prepareToSave(this.runner.record);
        payload['version'] = VERSION;
        payload['locale'] = this.locale;
        try {
          payload['numPreviousReports'] = this.storage.reports.length;
          if (this.storage.reports.length > 0) {
            payload['dateFirstReport'] = this.storage.reports[0][0];
          }
        } catch (e) {
          console.log('Failed to add stats');
        }
        payload['notificationsEnabled'] = this.notifications.canAddNotification;
        this.storage.addReport(payload);
        if (window.location.hostname === 'coronaisrael.org') {
          return this.http.post('https://europe-west2-hasadna-general.cloudfunctions.net/avid-covider', payload);
        } else {
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
