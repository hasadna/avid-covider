import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NotificationService } from '../notification.service';
import { VERSION } from '../constants';
import { AppinstallService } from '../appinstall.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.less']
})
export class IntroPageComponent implements OnInit, AfterViewInit {

  @Input() autostart = false;
  @Input() startButton = true;
  @Output() info = new EventEmitter<void>();
  @Output() chat = new EventEmitter<void>();

  version = VERSION;

  @ViewChild('notificationTitle') notificationTitle: ElementRef;
  @ViewChild('notificationBody') notificationBody: ElementRef;
  @ViewChild('notificationAction') notificationAction: ElementRef;

  constructor(private notifications: NotificationService,
              public appinstall: AppinstallService,
              @Inject(LOCALE_ID) public locale) {}

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
    if (this.autostart) {
      window.setTimeout(() => {
        this.chat.emit();
      }, 0);
    }
  }
}
