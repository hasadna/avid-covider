import { Component, OnInit, AfterViewInit, Input, Inject, LOCALE_ID } from '@angular/core';
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

  constructor(public layout: LayoutService, public mapService: MapService,
              @Inject(LOCALE_ID) private locale) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // We wait here to ensure we have the layout readonly
    setTimeout(() => {
      try {
        this.mapService.init();
        this.map = new mapboxgl.Map({
          container: 'fullscreen-map',
          style: 'mapbox://styles/wios/ck8xf8qi305nr1iqan5e50vcv',
          center: [this.mapService.lat, this.mapService.lng],
          minZoom: 3,
          zoom: this.mapService.zoom
        });
        if (this.layout.desktop) {
          this.map.addControl(new mapboxgl.NavigationControl({
            showCompass: false,
            showZoom: true,
            visualizePitch: false
          }), 'top-left');
        }
        for (const f of ['settlement-major-label', 'settlement-minor-label', 'settlement-subdivision-label', 'road-label-simple-new']) {
          this.map.setLayoutProperty(f, 'text-field', [
            'get',
            'name_' + this.locale
          ]);
        }
      } catch (e) {
        console.log('Failed to instantiate map');
      }
    }, 100);
  }

}
