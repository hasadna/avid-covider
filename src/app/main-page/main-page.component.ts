import { Component, OnInit } from '@angular/core';
import { SourceService } from '../source.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  ftab = 'intro';
  _tab = 'thankyou';

  constructor(private source: SourceService) { }

  ngOnInit() {
  }

  set tab(value) {
    console.log('TAB=', value);
    this._tab = value;
  }

  get tab(): string {
    return this._tab;
  }

}
