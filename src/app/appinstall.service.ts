import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppinstallService {

  installPrompt: any;

  constructor() { }

  @HostListener('window:beforeinstallprompt', ['$event'])
  beforeinstallprompt($event) {
    $event.preventDefault();
    this.installPrompt = $event;
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
