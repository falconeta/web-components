import { ComponentInfo } from './../interfaces';
import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../components';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class RegisterComponentService {
  private infoComponents: ComponentInfo[];
  constructor(private log: NGXLogger, private injector: Injector) {
    this.infoComponents = [];
  }

  public registerComponent(component: typeof BaseComponent) {
    const info = new component(this.log, this.injector).getInfo();
    if (info) {
      this.infoComponents.push(info);
    }
  }

  public getThemeInfo(): ComponentInfo[] {
    return this.infoComponents;
  }
}
