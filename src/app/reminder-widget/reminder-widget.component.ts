import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate, sequence, keyframes } from '@angular/animations';

@Component({
  selector: 'app-reminder-widget',
  templateUrl: './reminder-widget.component.html',
  styleUrls: ['./reminder-widget.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({transform: 'translateY(0%)'})),
      state('closed', style({transform: 'translateY(100%)', display: 'none'})),
      transition('open => closed', [
        sequence([
          animate('0.25s 0s ease-in', keyframes([
            style({transform: 'translateY(0%)'}),
            style({transform: 'translateY(100%)'})
          ])),
          style({display: 'none'})
        ])
      ]),
      transition('closed => open', [
        sequence([
          style({display: 'flex'}),
          animate('0.25s 0s ease-out', keyframes([
            style({transform: 'translateY(100%)'}),
            style({transform: 'translateY(0%)'})
          ]))
        ])
      ])
    ])
  ]
})
export class ReminderWidgetComponent implements OnInit, OnChanges {

  @Output() select = new EventEmitter<string>();
  @Input() options: any[] = null;

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  resolve(value?) {
    this.select.emit(value);
    this.isOpen = false;
  }

  ngOnChanges() {
    this.isOpen = !!this.options && !!this.options.length;
  }
}
