import { Component, OnInit, AfterViewInit, Input, Inject, LOCALE_ID } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LayoutService } from '../layout.service';
import { MapService } from '../map.service';
import { I18nService } from '../i18n.service';
import { ReportStoreService } from '../report-store.service';
import { PRODUCTION } from '../constants';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  popupLeft = '';
  popupTop = '';
  popupVisible = false;
  popupData: any = {};
  popupStream = new Subject<any>();

  private map: mapboxgl.Map;

  constructor(public layout: LayoutService, public mapService: MapService, private i18n: I18nService,
              private storage: ReportStoreService, @Inject(LOCALE_ID) private locale) {
    this.popupStream.pipe(
      debounceTime(250),
      distinctUntilChanged((prev, curr) => prev.city_id === curr.city_id),
    ).subscribe((ev) => {
      this.popupVisible = !!ev.city_id;
      if (this.popupVisible) {
        this.popupLeft = (this.padding + ev.location.x) + 'px';
        this.popupTop = (this.padding + ev.location.y) + 'px';
        this.popupData = this.mapService.popup_data[ev.city_id] || {};

        this.popupData.txCityName = this.popupData.translations ?
          (this.popupData.translations[this.locale] || this.popupData.translations.he) :
          this.popupData.city_name;
      }
    });
  }

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

    this.mapService.init(() => {
      try {
        this.map = new mapboxgl.Map({
          container: 'fullscreen-map',
          style: 'mapbox://styles/wios/ck9qrvmgv1utk1is4aw2xjxrh' + (PRODUCTION ? '' : '/draft'),
          center: [this.mapService.lon, this.mapService.lat],
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
        const md = this.mapService.config;
        this.map.on('load', () => {
          this.map.setPaintProperty('city-fill', 'fill-color', md.city_fill_color_cases);
          this.map.setPaintProperty('city-pattern', 'fill-pattern', md.city_fill_pattern_cases);
          this.map.setPaintProperty('neighborhood-fill', 'fill-color', md.neighborhood_fill_color_cases);
          this.map.setPaintProperty('neighborhood-pattern', 'fill-pattern', md.neighborhood_fill_pattern_cases);
          this.map.flyTo({center: [this.mapService.lon, this.mapService.lat]});
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

        this.map.on('mousemove', 'city-fill', (e) => {
          // Change the cursor style as a UI indicator.

          const city_id = e.features[0].properties.id;
          const location = e.point;

          this.map.getCanvas().style.cursor = 'pointer';

          this.popupStream.next({city_id, location})
        });

        this.map.on('mouseleave', 'city-fill', () => {
          this.map.getCanvas().style.cursor = '';
          this.popupStream.next({city_id: null});
        });

        this.map.on('movestart', () => {
          this.map.getCanvas().style.cursor = '';
          this.popupStream.next({city_id: null});
        });

        this.map.on('zoomstart', () => {
          this.map.getCanvas().style.cursor = '';
          this.popupStream.next({city_id: null});
        });
      } catch (e) {
        console.log('Failed to instantiate map', e);
      }
    });
  }

}
