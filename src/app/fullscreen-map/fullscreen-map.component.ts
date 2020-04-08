import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../map.service';

import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fullscreen-map',
  templateUrl: './fullscreen-map.component.html',
  styleUrls: ['./fullscreen-map.component.less']
})
export class FullscreenMapComponent implements OnInit, AfterViewInit {

  @Output() chat = new EventEmitter<void>();
  @Output() thankyou = new EventEmitter<void>();
  private map: any;

  constructor(public mapService: MapService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      container: 'fullscreen-map',
      style: 'mapbox://styles/mushon/ck8iswl5301yh1iqvv1fwmoz5',
      center: [34.796, 31.984],
      minZoom: 3,
      zoom: 8
    });
  }

}
