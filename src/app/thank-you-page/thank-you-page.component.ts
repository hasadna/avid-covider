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
    this.addNotificationA().then(() => { console.log('setNotification!'); });
  }

  async addNotificationA() {
    try {
      console.log('showtrigger?', 'showTrigger' in Notification.prototype);
      console.log('permission?', Notification.permission);
      const permission = await Notification.requestPermission();
      console.log('Got permission', permission);
      const registration = await navigator.serviceWorker.getRegistration();
      console.log('got registration', registration);
      if (registration) {
        await registration.showNotification('זמן לדיווח הבריאות היומי!', <NotificationOptions>{
            tag: 'corona-predict',
            actions: [
              {
                action: 'open', title: 'דווח עכשיו'
              }
            ],
            data: window.location.href,
            body: 'הגיע הזמן לדווח שוב כיצד אתם מרגישים! רק ביחד ננצח את הקורונה 💪🏽!',
            requireInteraction: true,
            icon: '/assets/img/apple-touch-icon.png',
            showTrigger: new window['TimestampTrigger'](Date.now() + 10000)});
      }
    } catch (e) {
      console.log('Failed to set notification');
    }
  }
}
