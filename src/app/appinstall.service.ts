import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppinstallService {

  installPrompt: any;

  constructor() {
    fromEvent(window, 'beforeinstallprompt').subscribe(($event) => {
      $event.preventDefault();
      this.installPrompt = $event;
      console.log('Revceived beforeinstallprompt', $event);
    });
  }

  showButton() {
    return !!this.installPrompt;
  }

  prompt() {
    if (this.showButton()) {
      this.installPrompt.prompt().then(
        (res) => { console.log('Install Prompt', res); },
        (err) => { console.log('Install Prompt error', err); }
      );
    }
  }

}
