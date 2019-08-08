import { ComponentInfo } from './../interfaces';
import { OnInit, Injector } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

export class BaseComponent implements OnInit {
  protected logPrefix: string;
  constructor(protected log: NGXLogger, protected injector: Injector) {
    this.logPrefix = '[BASE COMPONENT] -';
  }

  ngOnInit() {
    this.log.debug(`${this.logPrefix} started...`);
  }

  getInfo(): ComponentInfo {
    return null;
  }
}
