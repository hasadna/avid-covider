import { Injectable } from '@angular/core';
import { SourceService } from './source.service';
import { first, catchError } from 'rxjs/operators';

import * as mapboxgl from 'mapbox-gl';
import { Subject, ReplaySubject } from 'rxjs';
import { ReportStoreService } from './report-store.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  overlayOpen = false;
  reportedToday = false;
  mapVisible = false;
  mapVisibleStream = new Subject();
  _init = false;
  lon = 34.785;
  lat = 32.075;
  zoom = 11;
  public configStream = new ReplaySubject<any>(1);
  public config: any;
  public popup_data: any = {};
  colorScale: any;

  constructor(private source: SourceService, private storage: ReportStoreService, private http: HttpClient) {
    this.source.sourceStream.pipe(first()).subscribe((_source) => {
      if (_source === 'map') {
        this.overlayOpen = true;
        this.mapVisible = true;
        this.storage.setEvent('share_map_open');
      }
    });
    this.http.get('/data/map_coloring.json')
        .pipe(
          catchError(() => {
            return this.http.get('https://avid-covider.phonaris.com/data/map_coloring.json');
          })
        ).subscribe((data: any) => {
          this.colorScale = data.color_scale;
          this.configStream.next(data);
        });
    this.http.get('/data/popup_data.json')
        .pipe(
          catchError(() => {
            return this.http.get('https://avid-covider.phonaris.com/data/popup_data.json');
          })
        ).subscribe((data) => {
          this.popup_data = data;
        });
  }

  init(callback) {
    if (this._init) {
      setTimeout(() => { callback(); }, 100);
    } else {
      this.configStream.pipe(first()).subscribe((config) => {
        this._init = true;
        this.config = config;
        (<any>mapboxgl).accessToken = 'pk.eyJ1Ijoid2lvcyIsImEiOiJjazh4ZXZ6Z24wejdtM3JvN2F1MHdlc2Z4In0.vz7knGcRWWGE4LGOLx8c7g';
        mapboxgl.setRTLTextPlugin(
          'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
          null,
          true // Lazy load the plugin
        );
        callback();
      });
    }
  }

  static() {
    return '/data/map_preview.png';
  }

  closeOverlay() {
    this.overlayOpen = false;
    this.storage.setEvent('share_map_overlay_close');
  }

  needsToReport() {
    return !this.reportedToday;
  }

  closeMap() {
    this.mapVisible = false;
    this.mapVisibleStream.next(this.mapVisible);
    this.storage.setEvent('map_close');
  }

  openMap() {
    this.mapVisible = true;
    this.mapVisibleStream.next(this.mapVisible);
    this.storage.setEvent('hp_map_open');
  }

  openMainMap() {
    this.moveTo(32.075, 34.785, 11);
    this.openMap();
  }

  moveTo(lat, lon, zoom) {
    this.lat = lat;
    this.lon = lon;
    this.zoom = zoom;
  }

  scoreClasses(score) {
    let ret = '';
    if (!score.nr || score.nr < 200) {
      ret += 'band-noinfo ';
    }
    if (score.nr > 40) {
      for (let i = 0 ; i < this.colorScale.length ; i++) {
        if (score.sr <= this.colorScale[i][0]) {
          return ret + 'band' + i;
        }
      }
      return ret + 'band' + (this.colorScale.length - 1);
    } else {
      return ret + 'band-none';
    }
  }

}
