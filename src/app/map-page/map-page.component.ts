import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.less']
})
export class MapPageComponent implements OnInit, AfterViewInit {

  constructor(private ls: LayoutService, private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ls.updateView(this.el.nativeElement);
    }, 0);
  }

}
