import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-fullscreen-map',
  templateUrl: './fullscreen-map.component.html',
  styleUrls: ['./fullscreen-map.component.less']
})
export class FullscreenMapComponent implements OnInit, AfterViewInit {

  @Output() chat = new EventEmitter<void>();
  @Output() thankyou = new EventEmitter<void>();
  infoboxActive = false;

  constructor(public mapService: MapService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  overlayVisible() {
    return this.mapService.overlayOpen && this.mapService.needsToReport();
  }
}
