import { Injectable } from '@angular/core';
import { SourceService } from './source.service';
import { first } from 'rxjs/operators';

import * as mapboxgl from 'mapbox-gl';
import { Subject } from 'rxjs';
import { ReportStoreService } from './report-store.service';

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

  constructor(private source: SourceService, private storage: ReportStoreService) {
    this.source.sourceStream.pipe(first()).subscribe((_source) => {
      if (_source === 'map') {
        this.overlayOpen = true;
        this.mapVisible = true;
        this.storage.setEvent('share_map_open');
      }
    });
  }

  init() {
    if (this._init) { return; }
    this._init = true;
    (<any>mapboxgl).accessToken = 'pk.eyJ1Ijoid2lvcyIsImEiOiJjazh4ZXZ6Z24wejdtM3JvN2F1MHdlc2Z4In0.vz7knGcRWWGE4LGOLx8c7g';
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true // Lazy load the plugin
    );
  }

  static() {
    return 'https://api.mapbox.com/styles/v1/wios/ck8xf8qi305nr1iqan5e50vcv/static/' +
           `${this.lat},${this.lng},${this.zoom},0/680x680@2x` +
           '?access_token=pk.eyJ1Ijoid2lvcyIsImEiOiJjazh4ZXZ6Z24wejdtM3JvN2F1MHdlc2Z4In0.vz7knGcRWWGE4LGOLx8c7g';
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
