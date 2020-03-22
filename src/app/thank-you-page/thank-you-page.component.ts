import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.less']
})
export class ThankYouPageComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  share() {
    const navigator = window.navigator;
    if (navigator['share']) {
      try {
        navigator['share']({ title: 'Corona Predict', url: window.location.href })
          .then((res) => {
            console.log('success');
        });
      } catch {
        console.log('Failed to share, alas 2');
      }
    } else {
      console.log('no share...');
    }
  }
}
