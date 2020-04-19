import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  shareActionsSupported = false;
  clipboardSupported = false;
  shareWidgetSupported = false;

  constructor() {
    try {
      this.clipboardSupported = document.queryCommandSupported && document.queryCommandSupported('copy');
    } catch (e) {
      console.log('Failed to check if copy clipboard is available');
    }
    const navigator = window.navigator;
    this.shareWidgetSupported = navigator && navigator['share'];
    this.shareActionsSupported = this.clipboardSupported || this.shareWidgetSupported;
  }

  get url(): string {
    return window.location.href + '?source=map';
  }

  shareWidget() {
    if (!this.shareWidgetSupported) {
      return 'error';
    }
    try {
      return navigator['share']({ title: 'Daily Corona Report', url: this.url });
    } catch {
      console.log('Failed to share, alas 2');
      return 'error';
    }
  }

  clipboardCopy(): string {
    if (!this.clipboardSupported) {
      return 'error';
    }
    const text = this.url;
    const txt = document.createElement('textarea');
    txt.textContent = text;
    txt.classList.add('visually-hidden');
    document.body.appendChild(txt);
    txt.select();
    try {
      document.execCommand('copy');
      return 'copied';
    } catch (ex) {
      return 'error';
    } finally {
      document.body.removeChild(txt);
    }
  }


}
