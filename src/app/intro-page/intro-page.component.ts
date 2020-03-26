import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.less']
})
export class IntroPageComponent implements OnInit, AfterViewInit {

  @Output() info = new EventEmitter<void>();
  @Output() chat = new EventEmitter<void>();

  @ViewChild('notificationTitle') notificationTitle: ElementRef;
  @ViewChild('notificationBody') notificationBody: ElementRef;
  @ViewChild('notificationAction') notificationAction: ElementRef;

  constructor(private notifications: NotificationService,
              @Inject(LOCALE_ID) public locale) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.notifications.init(
      this.notificationTitle.nativeElement.innerHTML,
      this.notificationBody.nativeElement.innerHTML,
      this.notificationAction.nativeElement.innerHTML
    );
    if (this.notifications.canAddNotification) {
      this.notifications.addNotification();
    }
  }
}
