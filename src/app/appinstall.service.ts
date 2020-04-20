import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppinstallService {

  installPrompt: any;
  platforms = [];
  prompts = [
    this.openUrl('https://play.google.com/store/apps/details?id=il.ac.weizmann.corona')
    // this.openUrl('https://itunes.com'),
  ];

  constructor() {
    fromEvent(window, 'beforeinstallprompt').subscribe(($event) => {
      $event.preventDefault();
      this.installPrompt = $event;
      this.platforms = this.installPrompt.platforms || [];
      this.prompts = [];
      for (const platform of this.platforms) {
        this.prompts.push(() => this.installPrompt.prompt());
      }
    });
  }

  openUrl(url) {
    return () => {
      window.open(url, '_blank');
      return Promise.resolve(true);
    };
  }

  showButton() {
    return (this.androidAvailable() || this.iphoneAvailable());
  }

  platformAvailable(platform) {
    return this.platforms && Array.isArray(this.platforms) && this.platforms.indexOf(platform) >= 0;
  }

  androidAvailable() {
    return this.platformAvailable('play');
  }

  iphoneAvailable() {
    return this.platformAvailable('itunes');
  }

  prompt(platform) {
    return this.prompts[this.platforms.indexOf(platform)]().then(
      (res) => { console.log('Install Prompt', res); },
      (err) => { console.log('Install Prompt error', err); }
    );
  }
}
