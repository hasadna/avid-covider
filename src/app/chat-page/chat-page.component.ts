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
  @ViewChild('notificationTitle') notificationTitle: ElementRef;
  @ViewChild('notificationBody') notificationBody: ElementRef;
  @ViewChild('notificationAction') notificationAction: ElementRef;

  @Output() done = new EventEmitter<void>();

  constructor(private http: HttpClient,
              private storage: ReportStoreService,
              private notifications: NotificationService,
              @Inject(LOCALE_ID) private locale) {}

  init() {
    this.content = new ContentManager();
    this.runner = new ScriptRunnerImpl(this.http, this.content, this.locale);
    this.runner.timeout = 250;
    this.runner.debug = false;
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

    if (this.notifications.canAddNotification) {
      this.notifications.addNotification(
        this.notificationTitle.nativeElement.innerHTML,
        this.notificationBody.nativeElement.innerHTML,
        this.notificationAction.nativeElement.innerHTML
      );
    }

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
        flag_from_var: (record: any, varname) => {
          varname = varname || '_var';
          if (record[varname]) {
            record[record[varname]] = true;
            record[varname] = null;
          }
        }
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
