import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'wc-landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LandingZoneComponent extends BaseComponent implements OnInit {
  @Input() page: any;

  constructor(protected log: NGXLogger) {
    super(log);
    this.logPrefix = '[LANDING PAGE] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
