import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../map.service';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fullscreen-map',
  templateUrl: './fullscreen-map.component.html',
  styleUrls: ['./fullscreen-map.component.less']
})
export class FullscreenMapComponent implements OnInit, AfterViewInit {

  @Output() chat = new EventEmitter<void>();
  @Output() thankyou = new EventEmitter<void>();
  private map: mapboxgl.Map;
  infoboxActive = false;

  constructor(public mapService: MapService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      container: 'fullscreen-map',
      style: 'mapbox://styles/mushon/ck8rcqetd12xy1ilmyq15ksj2',
      center: [34.785, 32.075],
      minZoom: 3,
      zoom: 12
    });
    this.map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true,
      visualizePitch: false
    }), 'top-left');
  }

  overlayVisible() {
    return this.mapService.overlayOpen && this.mapService.needsToReport();
  }
}
