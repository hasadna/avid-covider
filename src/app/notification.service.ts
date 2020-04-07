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

  addNotification() {
    this.addNotificationA(this.title, this.body, this.action).then(() => { console.log('setNotification!'); });
  }

  async addNotificationA(title, body, action) {
    try {
      console.log('showtrigger?', 'showTrigger' in Notification.prototype);
      console.log('permission?', Notification.permission);
      const permission = await Notification.requestPermission();
      console.log('Got permission', permission);
      const registration = await navigator.serviceWorker.getRegistration();
      console.log('got registration', registration);
      const timeout = PRODUCTION ? 85500 : 300;
      console.log('got timeout', timeout);
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
            showTrigger: new window['TimestampTrigger'](Date.now() + timeout * 1000)});
      }
    } catch (e) {
      console.log('Failed to set notification');
    }
  }
}
