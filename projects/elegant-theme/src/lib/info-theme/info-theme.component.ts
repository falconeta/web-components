import { RegisterComponentService } from './../services';
import { Component, ViewEncapsulation, Output, EventEmitter, OnInit, Injector } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BaseComponent } from '../components';

@Component({
  selector: 'wc-info-theme',
  template: ``,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InfoThemeComponent extends BaseComponent implements OnInit {
  @Output() themeInfo: EventEmitter<any>;

  private registerComponentSRV: RegisterComponentService;

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.themeInfo = new EventEmitter();
    this.registerComponentSRV = injector.get(RegisterComponentService);
  }

  ngOnInit() {
    // :-(
    setTimeout(() => {
      this.themeInfo.emit(this.registerComponentSRV.getThemeInfo());
    });
  }
}
