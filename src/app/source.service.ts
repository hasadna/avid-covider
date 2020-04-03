import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  source: string = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      this.source = queryParamMap.get('source') || queryParamMap.get('utm') || this.source;
      this.router.navigate([], { queryParams: {source: null} });
    });
  }

  getSource() {
    return this.source || 'direct';
  }
}
