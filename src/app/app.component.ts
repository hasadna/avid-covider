import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';


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
    if ('serviceWorker' in navigator) {
      try {
        window.navigator.serviceWorker.register('/assets/sw.js');
        console.log('Registered serviceWorker');
      } catch (e) {
        console.log('Failed to register serviceWorker', e);
      }
    } else {
      console.log('No serviceworker');
    }
  }

  ngAfterViewInit() {
    this.setupSync().then(() => { console.log('done!'); })
  }

  async setupSync() {
    const navigator: any = window.navigator;
    const status = await navigator.permissions.query({
      'name': 'periodic-background-sync',
    });
    if (status.state === 'granted') {
      console.log('granted');
    } else {
      console.log('rejected');
    }
  }

  set tab(value) {
    console.log('TAB=', value);
    this._tab = value;
  }

  get tab(): string {
    return this._tab;
  }

}
