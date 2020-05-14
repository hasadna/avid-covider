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
  city_name = '';
  current = {};
  colorScale: any[];
  ready = false;
  open = false;

  constructor(@Inject(LOCALE_ID) private locale, private mapService: MapService) {
    this.mapService.configStream.pipe(first()).subscribe((config: any) => {
      this.colorScale = config.color_scale;
      this.ready = true;
    });
  }

  ngOnInit() {
    this.city_name = this.item.translations[this.locale] || this.item.translations.he;
    this.current = this.item.scores[this.item.scores.length - 1];
  }

  scoreClasses(score) {
    let ret = '';
    if (score.nr < 200) {
      ret += 'band-noinfo ';
    }
    for (let i = 0 ; i < this.colorScale.length ; i++) {
      if (score.sr <= this.colorScale[i][0]) {
        return ret + 'band' + i;
      }
    }
    return ret + 'band' + (this.colorScale.length - 1);
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
