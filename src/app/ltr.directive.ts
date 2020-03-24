import { Directive, ElementRef } from '@angular/core';
import { I18nService } from './i18n.service';

@Directive({
  selector: '[appLtr]'
})
export class LtrDirective {

  constructor(_: I18nService, el: ElementRef) {
    if (_.ltr) {
      el.nativeElement.classList.add('ltr');
    }
  }

}
