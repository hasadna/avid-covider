import { Component, Inject, LOCALE_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent  {
  _tab = 'intro';

  constructor(@Inject(LOCALE_ID) private locale) {}

  set tab(value) {
    console.log('TAB=', value);
    this._tab = value;
  }

  get tab(): string {
    return this._tab;
  }

}
