import { NgxLoggerLevel } from 'ngx-logger';

export interface Environment {
  production: boolean;
  typeLog: NgxLoggerLevel;
  wcLogPrefix: string;
}
