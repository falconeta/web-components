import { Environment } from './environment.interface';
import { NgxLoggerLevel } from 'ngx-logger';

export const environment: Environment = {
  production: true,
  typeLog: NgxLoggerLevel.INFO,
  wcLogPrefix: 'LIGHT THEME WEB COMPONENT'
};
