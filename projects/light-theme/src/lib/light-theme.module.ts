import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NGXLogger } from 'ngx-logger';

import { MatProgressBarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { environment } from '../environments/environment';

import { LoggerMonitor, RegisterComponentService } from './services';
import { LandingZoneComponent, BaseComponent, PhotoGalleryDialogComponent, HeaderComponent } from './components';
import { ParallaxDirective } from './directives';
import { InfoThemeComponent } from './info-theme/info-theme.component';

const material = [MatProgressBarModule, MatButtonModule, MatIconModule];

const components: typeof BaseComponent[] = [LandingZoneComponent, HeaderComponent, PhotoGalleryDialogComponent];
const componentsWithSelector = new Map<string, typeof BaseComponent>([
  ['wc-info-theme', InfoThemeComponent],
  ['wc-landing-zone', LandingZoneComponent],
  ['wc-header', HeaderComponent],
  ['wc-photo-gallery-dialog', PhotoGalleryDialogComponent]
]);

const directives = [ParallaxDirective];

@NgModule({
  declarations: [InfoThemeComponent, ...components, ...directives],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: environment.typeLog
    }),
    ...material
  ],
  entryComponents: [InfoThemeComponent, ...components],
  exports: [InfoThemeComponent, ...components],
  providers: [RegisterComponentService]
})
export class LightThemeModule {
  constructor(private injector: Injector, private log: NGXLogger, private registerComponentSRV: RegisterComponentService) {
    this.log.registerMonitor(new LoggerMonitor());

    componentsWithSelector.forEach((component, selector) => {
      customElements.define(selector, createCustomElement(component, { injector: this.injector }));
      this.registerComponentSRV.registerComponent(component);
    });
  }
  ngDoBootstrap() {}
}
