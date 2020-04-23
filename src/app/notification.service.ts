import { Injectable } from '@angular/core';
import { PRODUCTION } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public showNotificationBox = false;
  public canAddNotification = false;
  title: string;
  body: string;
  action: string;

  constructor() { }

  init(title, body, action) {
    this.title = title;
    this.body = body;
    this.action = action;
    try {
      const notificationAvailable = 'showTrigger' in Notification.prototype;
      const notificationPermissionNeeded = Notification.permission !== 'granted';
      this.showNotificationBox = notificationAvailable && notificationPermissionNeeded;
      this.canAddNotification = notificationAvailable && !notificationPermissionNeeded;
    } catch (e) {
      console.log('Failed to check if notification is available');
    }
  }

  async addNotification() {
    return this.addNotificationA(this.title, this.body, this.action);
  }

  async addNotificationA(title, body, action) {
    try {
      const permission = await Notification.requestPermission();
      console.log('Got permission', permission);
      const registration = await navigator.serviceWorker.getRegistration();
      console.log('got registration', registration);

      // calculate next trigger
      const DAY = (PRODUCTION ? 86400 : 600) * 1000;
      const HOUR = DAY / 24;
      const now = new Date();
      const now_ts = now.valueOf();
      const dow = PRODUCTION ? now.getUTCDay() : (Math.floor(now_ts / DAY) % 7);
      console.log('Today is:', dow, '(0 is sunday)');
      const min_hour = HOUR * ({
        5: 18
      }[dow] || 5); // UTC Times -> trigger won't be before 7 am (8 pm on saturdays)
      const max_hour = HOUR * ({
        4: 12
      }[dow] || 19); // UTC Times -> trigger won't be after 9 pm (2 pm on fridays)
      let remainder = now_ts % DAY;
      const day_start = now_ts - remainder;
      remainder = remainder > max_hour ? max_hour : remainder;
      remainder = remainder < min_hour ? min_hour : remainder;
      const next = day_start + DAY + remainder;
      const timeout = (next - now_ts);
      console.log('Next trigger in', Math.floor(timeout / 3600000), 'hours,', Math.floor((timeout % 3600000) / 60000), 'minutes');

      const notificationHref = window.location.href.split('?')[0] + '?source=notification';
      if (registration) {
        await registration.showNotification(title, <NotificationOptions>{
            tag: 'corona-predict',
            actions: [
              {
                action: 'open', title: action
              }
            ],
            data: notificationHref,
            body: body,
            requireInteraction: true,
            badge: '/notification.png',
            icon: '/android-chrome-96x96.png',
            showTrigger: new window['TimestampTrigger'](next)});
      }
    } catch (e) {
      console.log('Failed to set notification');
    }
  }
}
