import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { SourceService } from '../source.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  ftab = 'intro';
  _tab = 'intro';
  mobile = false;
  desktop = false;
  layout = null;

  constructor(private source: SourceService, private el: ElementRef) { }

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
      this.updateView();
    }, 0);
  }

  updateView() {
    const e: HTMLElement = this.el.nativeElement;
    this.mobile = e.offsetWidth < 600;
    this.desktop = e.offsetWidth >= 600;
    this.layout = this.mobile ? 'mobile' : 'desktop';
  }

  @HostListener('window:resize', ['$event'])
  resize(e) {
    this.updateView();
  }

  set tab(value) {
    console.log('TAB=', value);
    this._tab = value;
  }

  get tab(): string {
    return this._tab;
  }

}
