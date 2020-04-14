import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  _visible = false;

  constructor(@Inject(LOCALE_ID) public locale) { }

  ngOnInit() {
  }

  get visible() { return this._visible; }
  set visible(value) {
    this._visible = value;
    if (value) {
      setTimeout(() => {
        fromEvent(window, 'click').pipe(first()).subscribe(() => {
          window.setTimeout(() => {
            this._visible = false;
          }, 0);
        });
      }, 100);
    }
  }

}
