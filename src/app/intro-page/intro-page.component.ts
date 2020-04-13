import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NotificationService } from '../notification.service';
import { VERSION } from '../constants';
import { AppinstallService } from '../appinstall.service';
import { LayoutService } from '../layout.service';
import { MapService } from '../map.service';

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
  _fullMap = false;
  top = 0;
  breaks: any = {};

  @ViewChild('notificationTitle') notificationTitle: ElementRef;
  @ViewChild('notificationBody') notificationBody: ElementRef;
  @ViewChild('notificationAction') notificationAction: ElementRef;
  @ViewChild('content') content: ElementRef;

  constructor(private notifications: NotificationService,
              public appinstall: AppinstallService,
              private layout: LayoutService,
              private mapService: MapService,
              private el: ElementRef,
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
    window.setTimeout(() => {
      this.breaks = {
        base: this.layout.height - 423,
        full: this.layout.height - 66
      };
      if (this.layout.mobile) {
        this.top = this.breaks.base;
      }
      if (this.autostart) {
        this.chat.emit();
      }
    }, 100);
  }

  get fullMap() { return this._fullMap; }
  set fullMap(value) {
    this._fullMap = value;
    this.top = value ? this.breaks.full : this.breaks.base;
    this.el.nativeElement.scrollTo({left: 0, top: 0, behavior: 'smooth' });
  }
}
