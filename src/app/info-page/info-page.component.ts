import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.less']
})
export class InfoPageComponent implements OnInit {

  @Output() start = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
