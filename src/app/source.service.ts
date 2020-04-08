import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  source: string = null;
  sourceStream = new ReplaySubject<string>(1);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      this.source = queryParamMap.get('source') || queryParamMap.get('utm') || queryParamMap.get('utm_source') || this.source || 'map';
      this.router.navigate([], { queryParams: {source: null} });
      this.sourceStream.next(this.source);
    });
  }

  getSource() {
    return this.source;
  }
}
