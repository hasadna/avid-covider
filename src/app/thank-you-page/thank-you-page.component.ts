import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.less']
})
export class ThankYouPageComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();

  clipboardCopySupported = false;
  copied = false;

  constructor(public notifications: NotificationService) {
    try {
      this.clipboardCopySupported = document.queryCommandSupported && document.queryCommandSupported('copy');
    } catch (e) {
      console.log('Failed to check if copy clipboard is available');
    }
  }

  ngOnInit() {
    this.copied = false;
  }

  share() {
    const navigator = window.navigator;
    if (navigator['share']) {
      try {
        navigator['share']({ title: 'Daily Corona Report', url: window.location.href })
          .then((res) => {
            console.log('success');
        }, (err) => {
          console.log('error / aborted');
        });
      } catch {
        console.log('Failed to share, alas 2');
        this.clipboardCopy();
      }
    } else {
      console.log('no share...');
      this.clipboardCopy();
    }
  }

  clipboardCopy(): boolean {
    const text = window.location.href;
    if (!this.clipboardCopySupported) {
      return false;
    }
    const txt = document.createElement('textarea');
    txt.textContent = text;
    txt.classList.add('visually-hidden');
    document.body.appendChild(txt);
    txt.select();
    try {
      document.execCommand('copy');
      console.log('copied');
      this.copied = true;
      return true;
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(txt);
    }
  }

}
