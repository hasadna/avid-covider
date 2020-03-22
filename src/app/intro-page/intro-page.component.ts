import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.less']
})
export class IntroPageComponent implements OnInit {

  @Output() info = new EventEmitter<void>();
  @Output() chat = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
