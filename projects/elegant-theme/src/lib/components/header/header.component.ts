import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../interfaces/page-collection';

@Component({
  selector: 'wc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];

  constructor(protected log: NGXLogger) {
    super(log);
    this.logPrefix = '[HEADER] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
