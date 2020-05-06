import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { state, style, transition, animate, trigger, sequence, keyframes } from '@angular/animations';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.less'],
  animations: [
    trigger('openClose', [
      state('closed', style({ filter: 'blur(20px)', transform: 'translateY(-35%)', opacity: 0, display: 'none'})),
      state('open', style({ filter: 'blur(0px)', transform: 'translateY(0%)', opacity: 1, })),
      transition('open => closed', [
        sequence([
          animate('0.5s', keyframes([
            style({ filter: 'blur(0px)', transform: 'translateY(0%)', opacity: 1 }),
            style({ filter: 'blur(20px)', transform: 'translateY(-35%)', opacity: 0 })
          ])),
          style({ display: 'none' })
        ])
      ]),
      transition('closed => open', [
        sequence([
          style({ display: 'flex' }),
          animate('0.5s', keyframes([
            style({ filter: 'blur(20px)', transform: 'translateY(-35%)', opacity: 0 }),
            style({ filter: 'blur(0px)', transform: 'translateY(0%)', opacity: 1 })
          ]))
        ])
      ])
    ])
  ]
})
export class ToasterComponent implements OnInit, OnChanges {

  @Input() message: string = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.message) {
      setTimeout(() => {
        this.message = null;
      }, 5000);
    }
  }

}
