import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ReportStoreService } from './report-store.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  nativeElement: HTMLElement;
  mobile: boolean;
  desktop: boolean;
  layout: string;
  height = 0;

  constructor(private storage: ReportStoreService) {
    fromEvent(window, 'resize').subscribe(($event) => {
      this.updateView();
    });
  }

  updateView(nativeElement?: HTMLElement) {
    if (nativeElement) {
      this.nativeElement = nativeElement;
    }
    if (this.nativeElement) {
      this.mobile = this.nativeElement.offsetWidth < 600;
      this.desktop = this.nativeElement.offsetWidth >= 600;
      this.layout = this.mobile ? 'mobile' : 'desktop';
      this.height = this.nativeElement.offsetHeight;
      this.storage.device.layout = this.layout;
    }
  }

}
