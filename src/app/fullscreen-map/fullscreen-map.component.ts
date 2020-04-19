import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../map.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-fullscreen-map',
  templateUrl: './fullscreen-map.component.html',
  styleUrls: ['./fullscreen-map.component.less']
})
export class FullscreenMapComponent implements OnInit, AfterViewInit {

  constructor(public mapService: MapService, public layout: LayoutService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  overlayVisible() {
    return this.mapService.overlayOpen && this.mapService.needsToReport();
  }
}
