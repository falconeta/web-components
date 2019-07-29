import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NGXLogger } from 'ngx-logger';

import { MatProgressBarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { environment } from '../environments/environment';

import { LoggerMonitor } from './services';
import { LandingZoneComponent, BaseComponent, PhotoGalleryDialogComponent, HeaderComponent } from './components';
import { ParallaxDirective } from './directives';

const material = [MatProgressBarModule, MatButtonModule, MatIconModule];

const components: typeof BaseComponent[] = [LandingZoneComponent, HeaderComponent, PhotoGalleryDialogComponent];
const componentsWithSelector = new Map<string, typeof BaseComponent>([
  ['wc-landing-zone', LandingZoneComponent],
  ['wc-header', HeaderComponent],
  ['wc-photo-gallery-dialog', PhotoGalleryDialogComponent]
]);

const directives = [ParallaxDirective];

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: environment.typeLog
    }),
    ...material
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
