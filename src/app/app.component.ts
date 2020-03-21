import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, LOCALE_ID } from '@angular/core';
import { ContentManager, ScriptRunnerNew as ScriptRunnerImpl } from 'hatool';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'hatool';
  helpVisible = false;
  moreInfoVisible = false;
  thankYouVisible = false;
  started = false;
  created = false;
  content: ContentManager;
  runner: ScriptRunnerImpl;

  @ViewChild('uploadFileText') uploadFileText: ElementRef;
  @ViewChild('uploadedFileText') uploadedFileText: ElementRef;
  @ViewChild('notUploadedFileText') notUploadedFileText: ElementRef;
  @ViewChild('inputPlaceholder') inputPlaceholder: ElementRef;

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale) {}

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
    this.moreInfoVisible = false;
    this.thankYouVisible = false;
    if (this.started) {
      return;
    }
    this.started = true;
    this.created = false;
    this.runner.run(
      '/assets/script.json',
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
        return this.http.post('https://europe-west2-hasadna-general.cloudfunctions.net/avid-covider', payload);
      }),
      map((response: any) => response.success)
    ).subscribe((success) => {
      console.log('done, success=' + success);
      this.thankYouVisible = true;
      this.started = false;
    });
  }

}
