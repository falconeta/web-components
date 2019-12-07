import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../interfaces/page-collection';
import { ParallaxData, ComponentInfo } from '../../interfaces';
import { ComponentInputs, ComponentOutputs } from '../../enums';

@Component({
  selector: 'wc-landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingZoneComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];
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
      outputs: [ComponentOutputs.SavePhotos, ComponentOutputs.OpenPhotosChooser]
    };
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
