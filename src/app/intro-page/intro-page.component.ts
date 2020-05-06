import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NotificationService } from '../notification.service';
import { VERSION } from '../constants';
import { LayoutService } from '../layout.service';
import { MapService } from '../map.service';
import { ReportStoreService } from '../report-store.service';

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
  seenNudge = false;
  mapInit = false;
  _tab = 'about';
  copies = [1, 1];

  @ViewChild('notificationTitle') notificationTitle: ElementRef;
  @ViewChild('notificationBody') notificationBody: ElementRef;
  @ViewChild('notificationAction') notificationAction: ElementRef;
  @ViewChild('container') container: ElementRef;

  constructor(private notifications: NotificationService,
              public layout: LayoutService,
              public mapService: MapService,
              private storage: ReportStoreService,
              @Inject(LOCALE_ID) public locale) {}

  ngOnInit() {
    this.tab = this._tab;
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
      if (this.layout.desktop) {
        this.copies = [1];
      }
      if (this.autostart) {
        this.chat.emit();
      }
    }, 100);
  }

  get tab() {
    return this._tab;
  }
  set tab(value) {
    this._tab = value;
    this.storage.setEvent('hp_tab_' + value);
  }

  get fullMap() { return this._fullMap; }
  set fullMap(value) {
    this._fullMap = value;
    this.top = value ? this.breaks.full : this.breaks.base;
    const el: HTMLElement = this.container.nativeElement;
    el.scrollTo({left: 0, top: 0, behavior: 'smooth' });
    this.mapInit = this.mapInit || value;
  }

  toggleIfScrolledDown(ev, scroll0?) {
    console.log('toggleIfScrolledDown', this.fullMap, this.layout.mobile, scroll0, this.container.nativeElement.scrollTop);
    if (this.layout.mobile && (scroll0 || this.container.nativeElement.scrollTop === 0)) {
      window.setTimeout(() => {
        this.fullMap = !this.fullMap;
      }, 100);
      ev.preventDefault();
    }
  }

  pullRefreshStart(ev) {
    this._startY = ev.touches[0].pageY;
  }
  pullRefresh(ev) {
    const y = ev.touches[0].pageY;
    // Activate custom pull-to-refresh effects when at the top of the container
    // and user is scrolling down.
    if (this.container.nativeElement.scrollTop === 0 && y > this._startY) {
      this.fullMap = true;
    }
  }

  nudgeNeeded() {
    const ret = !this.mapService.reportedToday && !this.seenNudge;
    if (ret) {
      this.storage.setEvent('hp_map_nudge_shown');
    }
    return ret;
  }

  closeNudge() {
    this.storage.setEvent('hp_map_nudge_closed');
    this.seenNudge = true;
  }
}
