import { Component, OnInit, ViewEncapsulation, Input, Injector, OnDestroy } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { ComponentInfo, ISubContent } from '../../interfaces';
import { ComponentInputs } from '../../enums';
import { PhotoCollectionModel } from '../../models';

@Component({
  selector: 'wc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() photos: PhotoCollectionModel[];
  @Input() contents: ISubContent[];

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[HEADER] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }

  getInfo(): ComponentInfo {
    return {
      name: 'wc-header',
      inputs: [ComponentInputs.photos, ComponentInputs.contents],
      outputs: []
    };
  }
}
