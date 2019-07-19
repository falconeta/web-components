import { ElegantThemeModule } from './lib/elegant-theme.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(ElegantThemeModule)
  .catch(err => console.error(err));
