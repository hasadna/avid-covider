import { Injectable, Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { ReportStoreService } from './report-store.service';

@Injectable({
  providedIn: 'root'
})
export class  I18nService {

  ltr = false;

  constructor(@Inject(LOCALE_ID) public locale: string, private storage: ReportStoreService) {
    this.ltr = locale === 'en' || locale === 'es' || locale === 'ru' || locale === 'fr';
    this.storage.device.locale = this.locale;
  }
}
