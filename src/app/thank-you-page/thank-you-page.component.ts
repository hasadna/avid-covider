import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NotificationService } from '../notification.service';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.less']
})
export class ThankYouPageComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();

  @ViewChild('calendarTitle') notificationTitle: ElementRef;
  @ViewChild('calendarBody') notificationBody: ElementRef;

  clipboardCopySupported = false;
  calendarSupported = false;
  copied = false;

  constructor(public notifications: NotificationService) {
    try {
      this.clipboardCopySupported = document.queryCommandSupported && document.queryCommandSupported('copy');
    } catch (e) {
      console.log('Failed to check if copy clipboard is available');
    }
    try {
      this.calendarSupported = !!new Blob();
    } catch (e) {
      console.log('Failed to check for calendarSupported');
    }
  }

  ngOnInit() {
    this.copied = false;
  }

  share() {
    const navigator = window.navigator;
    if (navigator['share']) {
      try {
        navigator['share']({ title: 'Daily Corona Report', url: window.location.href })
          .then((res) => {
            console.log('success');
        }, (err) => {
          console.log('error / aborted');
        });
      } catch {
        console.log('Failed to share, alas 2');
        this.clipboardCopy();
      }
    } else {
      console.log('no share...');
      this.clipboardCopy();
    }
  }

  clipboardCopy(): boolean {
    const text = window.location.href;
    if (!this.clipboardCopySupported) {
      return false;
    }
    const txt = document.createElement('textarea');
    txt.textContent = text;
    txt.classList.add('visually-hidden');
    document.body.appendChild(txt);
    txt.select();
    try {
      document.execCommand('copy');
      console.log('copied');
      this.copied = true;
      return true;
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(txt);
    }
  }

  downloadCalendar() {
    const calendarHref = window.location.href.split('?')[0] + '?from=calendar';
    const title = this.notificationTitle.nativeElement.innerHTML;
    const body = this.notificationBody.nativeElement.innerHTML;

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//coronaisrael.org//
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Asia/Jerusalem
TZURL:http://tzurl.org/zoneinfo-outlook/Asia/Jerusalem
X-LIC-LOCATION:Asia/Jerusalem
BEGIN:DAYLIGHT
TZOFFSETFROM:+0200
TZOFFSETTO:+0300
TZNAME:EEST
DTSTART:19700329T000000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0300
TZOFFSETTO:+0200
TZNAME:EET
DTSTART:19701025T000000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:20200328T131636Z
UID:corona-israel-0001
DTSTART;TZID=Asia/Jerusalem:20200328T080000
RRULE:FREQ=DAILY
DTEND;TZID=Asia/Jerusalem:20200328T081500
SUMMARY:${title}
URL:${calendarHref}
DESCRIPTION:${body}
LOCATION:${calendarHref}
TRANSP:TRANSPARENT
X-MICROSOFT-CDO-BUSYSTATUS:FREE
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:${title}
TRIGGER:-PT0M
END:VALARM
END:VEVENT
END:VCALENDAR`;
    try {
      FileSaver.saveAs(new Blob([ics],  {type: 'text/calendar;charset=utf-8'}), 'corona.ics');
    } catch (e) {
      console.log('Failed to set calendar');
    }
  }

}
