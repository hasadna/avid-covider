import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { SourceService } from '../source.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  ftab = 'intro';
  _tab = 'intro';

  constructor(private source: SourceService, private el: ElementRef, public ls: LayoutService) { }

  ngOnInit() {
    console.log('source.getSource', this.source.getSource());
    this.source.sourceStream.subscribe((source) => {
      if (source === 'map') {
        this._tab = 'fullscreenmap';
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ls.updateView(this.el.nativeElement);
    }, 0);
  }

  set tab(value) {
    console.log('TAB=', value);
    this._tab = value;
  }

  get tab(): string {
    return this._tab;
  }

}
