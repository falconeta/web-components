import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { ParallaxData, ComponentInfo, ISubPhoto, ISubContent } from '../../interfaces';
import { ComponentInputs, ComponentOutputs } from '../../enums';

@Component({
  selector: 'wc-landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingZoneComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() photos: ISubPhoto[];
  @Input() contents: ISubContent[];
  @Input() parallaxData: ParallaxData;

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[LANDING ZONE] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getInfo(): ComponentInfo {
    return {
      name: 'wc-landing-zone',
      inputs: [ComponentInputs.photos, ComponentInputs.contents, ComponentInputs.parallaxData],
      outputs: [ComponentOutputs.DatasToSave, ComponentOutputs.OpenPhotosChooser, ComponentOutputs.DismissCall]
    };
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
