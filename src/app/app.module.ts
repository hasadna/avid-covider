import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HatoolLibModule } from 'hatool';

import * as Sentry from '@sentry/browser';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

Sentry.init({
  dsn: 'https://cf52812983df4a6a8d452544bfabbd11@sentry.io/1489566'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    ChatPageComponent,
    InfoPageComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HatoolLibModule,
  ],
  providers: [
    // {provide: ErrorHandler, useClass: SentryErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
