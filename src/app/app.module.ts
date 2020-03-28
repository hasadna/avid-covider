import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HatoolLibModule } from 'hatool';

import * as Sentry from '@sentry/browser';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { HeaderComponent } from './header/header.component';
import { VERSION } from './constants';
import { LtrDirective } from './ltr.directive';
import { GenericPageComponent } from './generic-page/generic-page.component';
import { MainPageComponent } from './main-page/main-page.component';

Sentry.init({
  dsn: 'https://3ab8c72ec2704d1ca45a22019db1ae17@sentry.io/5170583',
  release: 'v' + VERSION
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    ChatPageComponent,
    InfoPageComponent,
    ThankYouPageComponent,
    HeaderComponent,
    LtrDirective,
    GenericPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HatoolLibModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: window.location.protocol === 'http:' ? [] : [
    {provide: ErrorHandler, useClass: SentryErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
