import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.less']
})
export class ThankYouPageComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();

  clipboardCopySupported = false;
  notificationAvailable = false;
  copied = false;

  constructor() {
    this.clipboardCopySupported = document.queryCommandSupported && document.queryCommandSupported('copy');
  }

  ngOnInit() {
    this.copied = false;
    try {
      this.notificationAvailable = 'showTrigger' in Notification.prototype;
    } catch (e) {
      console.log('Failed to check if notification is available');
    }
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

  addNotification() {
    console.log('showtrigger?', 'showTrigger' in Notification.prototype);
    console.log('permission?', Notification.permission);
    try {
      Notification.requestPermission()
      .then((response) => {
        console.log('Got response', response);
        return navigator.serviceWorker.getRegistration();
      }, (err) => {
        console.log('Failed to get notification permissions');
      })
      .then((registration) => {
        console.log('got registration', registration);
        if (registration) {
          return registration.showNotification('Hey, welcome back!', <NotificationOptions>{
            tag: 'corona-predict',
            body: 'Your appointment is due in ten minutes!',
            showTrigger: new window['TimestampTrigger'](Date.now() + 10000)});
        }
      }, (err) => {
        console.log('failed to get registration');
      }).then((result) => {
        console.log('added notification', result);
      }, (err) => {
        console.log('failed to add notification', err);
      });
    } catch (e) {
      console.log('Failed to set notification');
    }
  }
}
