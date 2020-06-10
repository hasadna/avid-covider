import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';
import { MapService } from '../map.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-city-results',
  templateUrl: './city-results.component.html',
  styleUrls: ['./city-results.component.less']
})
export class CityResultsComponent implements OnInit {

  @Input() item;
  @Input() dropdown = true;

  city_name = '';
  current = {};
  colorScale: any[];
  ready = false;
  open = false;

  constructor(@Inject(LOCALE_ID) private locale, public mapService: MapService) {
    this.mapService.configStream.pipe(first()).subscribe((config: any) => {
      this.ready = true;
    });
  }

  ngOnInit() {
    this.city_name = this.item.translations ? (this.item.translations[this.locale] || this.item.translations.he) : '';
    this.current = this.item.scores[this.item.scores.length - 1];
  }

  openMap() {
    this.mapService.moveTo(
        this.item.image.center[0],
        this.item.image.center[1],
        this.item.image.zoom
    );
    this.mapService.openMap();
  }

}
