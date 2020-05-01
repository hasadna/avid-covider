import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { ReportStoreService } from './report-store.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  source: string = null;
  sourceStream = new ReplaySubject<string>(1);

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private storage: ReportStoreService) {
    this.activatedRoute.queryParamMap.pipe(first()).subscribe((queryParamMap) => {
      this.source = queryParamMap.get('source') || queryParamMap.get('utm') || queryParamMap.get('utm_source') || this.source || 'direct';
      this.storage.device.location = window.location.href;
      this.storage.device.engagementSource = this.source;
      this.storage.device.originalReferrer = this.storage.device.originalReferrer || document.referrer;
      this.storage.device.referrer = document.referrer;
      this.storage.saveDevice(this.storage.device);

      this.router.navigate([], { queryParams: {source: null} });
      this.sourceStream.next(this.source);
    });
  }

  getSource() {
    return this.source;
  }
}
