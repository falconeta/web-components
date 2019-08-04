import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../interfaces/page-collection';
import { ParallaxData } from '../../interfaces';

@Component({
  selector: 'wc-landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LandingZoneComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];
  @Input() parallaxData: ParallaxData;

  constructor(protected log: NGXLogger) {
    super(log);
    this.logPrefix = '[LANDING ZONE] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
