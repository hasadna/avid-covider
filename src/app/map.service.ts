import { Injectable } from '@angular/core';
import { SourceService } from './source.service';
import { first } from 'rxjs/operators';

import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  overlayOpen = false;
  reportedToday = false;
  mapVisible = false;

  constructor(private source: SourceService) {
    this.source.sourceStream.pipe(first()).subscribe((_source) => {
      if (_source === 'map') {
        this.overlayOpen = true;
        this.mapVisible = true;
      }
    });
    (<any>mapboxgl).accessToken = 'pk.eyJ1Ijoid2lvcyIsImEiOiJjazh4ZXZ6Z24wejdtM3JvN2F1MHdlc2Z4In0.vz7knGcRWWGE4LGOLx8c7g';
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true // Lazy load the plugin
    );
  }

  closeOverlay() {
    this.overlayOpen = false;
  }

  needsToReport() {
    return !this.reportedToday;
  }

  closeMap() {
    this.mapVisible = false;
  }

  openMap() {
    this.mapVisible = true;
  }
}
