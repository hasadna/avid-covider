import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMessageOptions() {
    return element.all(by.css('htl-message-options .options button'));
  }

  getMessagesTo() {
    return element.all(by.css('htl-message-to .speech-bubble span'));
  }
}
