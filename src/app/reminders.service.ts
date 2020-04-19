import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { NotificationService } from './notification.service';
import { AppinstallService } from './appinstall.service';
import { script } from './script';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  reminderSources = [
    {
      id: 'notification',
      icon: 'assets/img/chrome-icon.png',
      check: () => this.notifications.showNotificationBox
    },
    {
      id: 'android-app',
      icon: 'android-chrome-96x96.png',
      check: () => this.appinstall.showButton() && this.appinstall.androidAvailable()
    },
    {
      id: 'iphone-app',
      icon: 'android-chrome-96x96.png',
      check: () => this.appinstall.showButton() && this.appinstall.iphoneAvailable()
    },
    {
      id: 'calendar',
      icon: 'assets/img/calendar-icon.png',
      check: () => true
    },
    {
      id: 'telegram',
      icon: 'assets/img/telegram-icon.png',
      check: () => true
    },
  ];
  titleTranslations: {};

  constructor(private notifications: NotificationService,
              private appinstall: AppinstallService,
              @Inject(LOCALE_ID) private locale) {
    this.titleTranslations = {};
    for (const item of script.s[1].keys) {
      if (item.name.indexOf('reminder:') === 0) {
        this.titleTranslations[item.name.slice(9)] = item.show;
      }
    }
  }

  widgetOptions(record?) {
    const options = [];
    for (const source of this.reminderSources) {
      if (source.check()) {
        let title = this.titleTranslations[source.id] || source.id;
        if (title['.tx']) {
          title = title['.tx'][this.locale] || title['.tx']['_'];
        }
        options.push({
          id: source.id,
          title: title,
          icon: source.icon
        });
      }
    }
    return options;
  }

}
