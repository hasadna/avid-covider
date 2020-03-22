import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VERSION } from '../constants';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.less']
})
export class InfoPageComponent implements OnInit {

  @Output() start = new EventEmitter<void>();
  version = VERSION;

  constructor() { }

  ngOnInit() {
  }

}
