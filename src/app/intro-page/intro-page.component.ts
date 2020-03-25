import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.less']
})
export class IntroPageComponent implements OnInit {

  @Output() info = new EventEmitter<void>();
  @Output() chat = new EventEmitter<void>();

  constructor(@Inject(LOCALE_ID) public locale) { }

  ngOnInit() {
  }

}
