
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElegantThemeComponent } from './components';
import { Injector, NgModule } from '@angular/core';

@NgModule({
  declarations: [ElegantThemeComponent],
  imports: [BrowserModule],
  entryComponents: [ElegantThemeComponent],
  exports: [ElegantThemeComponent]
})
export class ElegantThemeModule {
  constructor(private injector: Injector) {
    const customWelcome = createCustomElement(ElegantThemeComponent, { injector: this.injector });
    customElements.define('wc-elegant-theme', customWelcome);
  }
  ngDoBootstrap() {}
}
