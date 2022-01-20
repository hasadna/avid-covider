import { Component, Inject, LOCALE_ID, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { AppinstallService } from './appinstall.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, AfterViewInit  {
  installPrompt: any;
  constructor(@Inject(LOCALE_ID) private locale, private appinstall: AppinstallService) {
    console.log('LOCALE=', locale);
  }

  ngOnInit() {
    this.registerServiceWorker();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        window.navigator.serviceWorker.register('/sw.js')
          .then(
            (registration) => {
              console.log('registered serviceWorker', registration);
            },
            () => {
              console.log('failed to register');
            }
          );
      } catch (e) {
        console.log('Failed to register serviceWorker', e);
      }
    } else {
      console.log('No serviceworker');
    }
  }

  ngAfterViewInit() {
    window.alert('This site was active during the first two waves of Covid-19 in Israel. The data here is no longer up to date and is presented here for archival reference only.')
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
}
