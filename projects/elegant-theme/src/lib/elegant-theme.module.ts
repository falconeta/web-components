import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NGXLogger } from 'ngx-logger';

import { environment } from '../environments/environment';

import { LoggerMonitor } from './services';
import { LandingZoneComponent, BaseComponent } from './components';
import { HeaderComponent } from './components/header/header.component';

const components: typeof BaseComponent[] = [LandingZoneComponent, HeaderComponent];
const componentsWithSelector = new Map<string, typeof BaseComponent>([['wc-landing-zone', LandingZoneComponent], ['wc-header', HeaderComponent]]);

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: environment.typeLog
    })
  ],
  entryComponents: [...components],
  exports: [...components]
})
export class ElegantThemeModule {
  constructor(private injector: Injector, private log: NGXLogger) {
    this.log.registerMonitor(new LoggerMonitor());

    componentsWithSelector.forEach((component, selector) => {
      customElements.define(selector, createCustomElement(component, { injector: this.injector }));
    });
  }
  ngDoBootstrap() {}
}
