import { Component, OnInit, AfterViewInit, Input, Inject, LOCALE_ID } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LayoutService } from '../layout.service';
import { MapService } from '../map.service';
import { I18nService } from '../i18n.service';
import { ReportStoreService } from '../report-store.service';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.less']
})
export class HeatmapComponent implements OnInit, AfterViewInit {

  @Input() closeButton = true;
  @Input() infoButton = true;
  @Input() padding = 16;
  _infoboxActive = false;

  private map: mapboxgl.Map;

  constructor(public layout: LayoutService, public mapService: MapService, private i18n: I18nService,
              private storage: ReportStoreService, @Inject(LOCALE_ID) private locale) { }

  ngOnInit() {
  }

  set infoboxActive(value) {
    this._infoboxActive = value;
    this.storage.setEvent(value ? 'map_infobox_open' : 'map_infobox_close');
  }

  get infoboxActive() {
    return this._infoboxActive;
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
        this.map.on('load', () => {
          for (const f of ['settlement-major-label', 'settlement-minor-label', 'settlement-subdivision-label', 'road-label-simple-new']) {
            if (this.i18n.ltr) {
              this.map.setLayoutProperty(f, 'text-field', [
                'coalesce',
                ['get', 'name_' + this.locale.slice(0, 2)],
                ['get', 'name_en'],
                ['get', 'name']
              ]);
            } else {
              this.map.setLayoutProperty(f, 'text-field', [
                'coalesce',
                ['get', 'name_' + this.locale.slice(0, 2)],
                ['get', 'name']
              ]);
            }
          }
        });
      } catch (e) {
        console.log('Failed to instantiate map', e);
      }
    }, 100);
  }

}
