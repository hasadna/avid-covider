import { Component, Inject, LOCALE_ID, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, AfterViewInit  {
  ftab = 'intro';
  _tab = 'intro';

  constructor(@Inject(LOCALE_ID) private locale) {
    console.log('LOCALE=', locale);
  }

  ngOnInit() {
  }

  getPermission() {
    Notification.requestPermission()
      .then((response) => {
        console.log('Got response', response);
        this.registerServiceWorker();
      }, (err) => {
        console.log('Failed to get notification permissions');
      });
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        window.navigator.serviceWorker.register('/assets/sw.js')
          .then(
            (registration) => {
              console.log('registered serviceWorker', registration);
              return registration.showNotification('Hey, welcome back!', <NotificationOptions>{
                tag: 'corona-predict',
                body: 'Your appointment is due in ten minutes!',
                showTrigger: {timestamp: Date.now().valueOf() + 10000}
              });
            },
            () => {
              console.log('failed to register');
            }
          )
          .then((result) => {
            console.log('added notification', result);
          }, (err) => {
            console.log('failed to add notification', err);
          });
      } catch (e) {
        console.log('Failed to register serviceWorker', e);
      }
    } else {
      console.log('No serviceworker');
    }
  }

  ngAfterViewInit() {
    // this.setupSync().then(() => { console.log('done!'); }, () => { console.log('Failed to setup sync'); });
  }

  // async setupSync() {
  //   const navigator: any = window.navigator;
  //   const status = await navigator.permissions.query({
  //     'name': 'periodic-background-sync',
  //   });
  //   if (status.state === 'granted') {
  //     console.log('granted');
  //   } else {
  //     console.log('rejected', status);
  //   }
  // }

  set tab(value) {
    console.log('TAB=', value);
    this._tab = value;
    if (value === 'chat') {
      this.getPermission();
    }
  }

  get tab(): string {
    return this._tab;
  }

}
