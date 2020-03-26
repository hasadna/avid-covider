import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.less']
})
export class IntroPageComponent implements OnInit {

  @Output() info = new EventEmitter<void>();
  @Output() chat = new EventEmitter<void>();

  constructor(private notifications: NotificationService,
              @Inject(LOCALE_ID) public locale) { }

  ngOnInit() {
    this.notifications.init();
  }

}
