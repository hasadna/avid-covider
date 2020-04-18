import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        transform: 'translateY(-100%)',
      })),
      state('open', style({
        transform: 'translateY(0%)',
      })),
      transition('open => closed', [
        animate('0.25s 0s ease-in')
      ]),
      transition('closed => open', [
        animate('0.25s 0s ease-out')
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  @Input() message: string = null;
  @Input() buttonMessage: string = null;
  @Output() result = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close(value) {
    this.message = null;
    this.result.emit(value);
  }

}
