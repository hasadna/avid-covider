import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScriptRunnerService, ContentService } from 'hatool';
import { FileUploader } from 'hatool';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'hatool';
  helpVisible = false;
  moreInfoVisible = false;
  started = false;
  created = false;

  @ViewChild('uploadFileText') uploadFileText: ElementRef;
  @ViewChild('uploadedFileText') uploadedFileText: ElementRef;
  @ViewChild('notUploadedFileText') notUploadedFileText: ElementRef;
  @ViewChild('inputPlaceholder') inputPlaceholder: ElementRef;

  constructor(private runner: ScriptRunnerService,
              private content: ContentService) {}

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
    this.content.M.uploadFileText = this.uploadFileText.nativeElement.innerHTML;
    this.content.M.uploadedFileText = this.uploadedFileText.nativeElement.innerHTML;
    this.content.M.notUploadedFileText = this.notUploadedFileText.nativeElement.innerHTML;
    this.content.M.inputPlaceholder = this.inputPlaceholder.nativeElement.innerHTML;
  }

  ngOnInit() {
    this.content.M.sendButtonText = '';
  }

  start() {
    if (this.started) {
      return;
    }
    this.started = true;
    this.created = false;
    this.runner.run(
      '/assets/script.json',
      0,
      {},
      (key, value, record) => {}
    ).subscribe(() => { console.log('done!'); });
  }

}
