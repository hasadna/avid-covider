import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { state, style, transition, animate, trigger, sequence, keyframes } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateY(0%)' })),
      state('closed', style({ transform: 'translateY(-100%)', display: 'none'})),
      transition('open => closed', [
        sequence([
          animate('0.25s 0s ease-in', keyframes([
            style({transform: 'translateY(0%)'}),
            style({transform: 'translateY(-100%)'})
          ])),
          style({display: 'none'})
        ])
      ]),
      transition('closed => open', [
        sequence([
          style({display: 'flex'}),
          animate('0.25s 0s ease-out', keyframes([
            style({transform: 'translateY(-100%)'}),
            style({transform: 'translateY(0%)'})
          ]))
        ])
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
