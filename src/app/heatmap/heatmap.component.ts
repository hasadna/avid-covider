import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LayoutService } from '../layout.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.less']
})
export class HeatmapComponent implements OnInit, AfterViewInit {

  @Input() closeButton = true;
  @Input() infoButton = true;
  @Input() padding = 16;
  infoboxActive = false;

  private map: mapboxgl.Map;

  constructor(private layout: LayoutService, public mapService: MapService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // We wait here to ensure we have the layout readonly
    setTimeout(() => {
      try {
        this.map = new mapboxgl.Map({
          container: 'fullscreen-map',
          style: 'mapbox://styles/wios/ck8xf8qi305nr1iqan5e50vcv',
          center: [34.785, 32.075],
          minZoom: 3,
          zoom: 11
        });
        if (this.layout.desktop) {
          this.map.addControl(new mapboxgl.NavigationControl({
            showCompass: false,
            showZoom: true,
            visualizePitch: false
          }), 'top-left');
        }
      } catch (e) {
        console.log('Failed to instantiate map');
      }
    }, 100);
  }

}
