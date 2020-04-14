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
  _startY = 0;
  breaks: any = {};

  @ViewChild('notificationTitle') notificationTitle: ElementRef;
  @ViewChild('notificationBody') notificationBody: ElementRef;
  @ViewChild('notificationAction') notificationAction: ElementRef;
  @ViewChild('container') container: ElementRef;

  constructor(private notifications: NotificationService,
              public appinstall: AppinstallService,
              public layout: LayoutService,
              public mapService: MapService,
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
    const el: HTMLElement = this.container.nativeElement;
    el.scrollTo({left: 0, top: 0, behavior: 'smooth' });
  }

  toggleIfScrolledDown(ev, scroll0?) {
    console.log('toggleIfScrolledDown', this.fullMap, this.layout.mobile, scroll0, this.container.nativeElement.scrollTop);
    if (this.layout.mobile && (scroll0 || this.container.nativeElement.scrollTop === 0)) {
      window.setTimeout(() => {
        this.fullMap = !this.fullMap;
      }, 100);
    }
    ev.preventDefault();
  }

  pullRefreshStart(ev) {
    this._startY = ev.touches[0].pageY;
  }
  pullRefresh(ev) {
    const y = ev.touches[0].pageY;
    // Activate custom pull-to-refresh effects when at the top of the container
    // and user is scrolling up.
    if (document.scrollingElement.scrollTop === 0 && y > this._startY) {
      this.fullMap = true;
    }
  }
}
