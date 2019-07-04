import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [WelcomeComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const customWelcome = createCustomElement(WelcomeComponent, { injector: this.injector });
    customElements.define('custom-welcome', customWelcome);
  }

  ngDoBootstrap() { }
 }
