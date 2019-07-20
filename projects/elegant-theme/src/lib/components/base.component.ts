import { OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

export class BaseComponent implements OnInit {
  protected logPrefix: string;
  constructor(protected log: NGXLogger) {
    this.logPrefix = '[BASE COMPONENT] -';
  }

  ngOnInit() {
    this.log.debug(`${this.logPrefix} started...`);
  }
}
