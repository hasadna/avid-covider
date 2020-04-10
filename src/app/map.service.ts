import { Injectable } from '@angular/core';
import { SourceService } from './source.service';

import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  overlayOpen = false;
  reportedToday = false;

  constructor(private source: SourceService) {
    this.source.sourceStream.subscribe((_source) => {
      if (_source === 'map') {
        this.overlayOpen = true;
      }
    });
    (<any>mapboxgl).accessToken = 'pk.eyJ1IjoibXVzaG9uIiwiYSI6IjY1bHhhTkEifQ.DhW2zcurHHBtmnc2FsMBqg';
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
}
