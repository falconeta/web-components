import { Component, OnInit, ViewEncapsulation, Input, Injector } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../interfaces/page-collection';
import { ComponentInfo } from '../../interfaces';

@Component({
  selector: 'wc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[HEADER] -';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getInfo(): ComponentInfo {
    return {
      name: 'wc-header',
      inputs: ['photos', 'contents']
    };
  }
}
