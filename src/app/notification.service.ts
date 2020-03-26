import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public showNotificationBox = false;
  public canAddNotification = false;

  constructor() { }

  init() {
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
      const timeout = (window.location.hostname === 'avid-covider.phonaris.com') ?
        300 : 85500;
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
            icon: '/apple-touch-icon.png',
            showTrigger: new window['TimestampTrigger'](Date.now() + timeout * 1000)});
      }
    } catch (e) {
      console.log('Failed to set notification');
    }
  }
}
