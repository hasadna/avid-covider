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
    });
  }

  showButton() {
    return this.androidAvailable() || this.iphoneAvailable() || true;
  }

  platformAvailable(platform) {
    return this.installPrompt && this.installPrompt.platforms &&
      Array.isArray(this.installPrompt.platforms) && this.installPrompt.platforms.indexOf(platform) >= 0;
  }

  androidAvailable() {
    return this.platformAvailable('play');
  }

  iphoneAvailable() {
    return this.platformAvailable('itunes');
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
