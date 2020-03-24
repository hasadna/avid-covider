import { Injectable, Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  I18nService {

  ltr = false;

  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.ltr = locale === 'en' || locale === 'es' || locale === 'ru';
  }
}
