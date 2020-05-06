import { Injectable } from '@angular/core';
import { SourceService } from './source.service';
import { first, catchError } from 'rxjs/operators';

import * as mapboxgl from 'mapbox-gl';
import { Subject } from 'rxjs';
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
  lat = 34.785;
  lng = 32.075;
  zoom = 11;
  public config: any;

  constructor(private source: SourceService, private storage: ReportStoreService, private http: HttpClient) {
    this.source.sourceStream.pipe(first()).subscribe((_source) => {
      if (_source === 'map') {
        this.overlayOpen = true;
        this.mapVisible = true;
        this.storage.setEvent('share_map_open');
      }
    });
  }

  init(callback) {
    if (this._init) {
      setTimeout(() => { callback(); }, 100);
    } else {
      this.http.get('/data/map_coloring.json')
        .pipe(
          catchError(() => {
            return this.http.get('https://avid-covider.phonaris.com/data/map_coloring.json?a=1');
          })
        ).subscribe((data) => {
          this._init = true;
          this.config = data;
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
}
