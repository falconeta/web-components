import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../interfaces/page-collection';

@Component({
  selector: 'wc-landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LandingZoneComponent extends BaseComponent implements OnInit {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];

  @Input() scrollData: UIEvent;
  @Input() containerResized: Element;

  constructor(protected log: NGXLogger) {
    super(log);
    this.logPrefix = '[LANDING ZONE] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
