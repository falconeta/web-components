import { NGXLoggerMonitor, NGXLogInterface } from 'ngx-logger';
import { environment } from '../../environments/environment';

export class LoggerMonitor implements NGXLoggerMonitor {
  onLog(log: NGXLogInterface) {
    console.log(environment.wcLogPrefix, log);
  }
}
