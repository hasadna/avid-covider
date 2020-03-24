import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.less']
})
export class ThankYouPageComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();

  // clipboardCopySupported = false;

  constructor() {
    // this.clipsboardCopySupported = document.queryCommandSupported && document.queryCommandSupported('copy');
  }

  ngOnInit() {
  }

  share() {
    const navigator = window.navigator;
    if (navigator['share']) {
      try {
        navigator['share']({ title: 'Corona Predict', url: window.location.href })
          .then((res) => {
            console.log('success');
        }, (err) => {
          console.log('error / aborted');
        });
      } catch {
        console.log('Failed to share, alas 2');
      }
    } else {
      console.log('no share...');
    }
  }

  // clipboardCopy(text: string, owner: HTMLElement): boolean {
  //   if (!this.clipboardCopySupported) {
  //     return false;
  //   }
  //   const txt = document.createElement('textarea');
  //   txt.setAttribute(contentAttrs.name, getName(owner));
  //   txt.textContent = text;
  //   txt.classList.add('visually-hidden');
  //   document.body.appendChild(txt);
  //   txt.select();
  //   try {
  //     return document.execCommand('copy');
  //   } catch (ex) {
  //     return false;
  //   } finally {
  //     document.body.removeChild(txt);
  //   }
  // }

}
