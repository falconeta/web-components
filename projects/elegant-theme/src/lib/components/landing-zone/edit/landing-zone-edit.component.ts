import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent, IPageComponentData } from '../../../interfaces/page-collection';
import { ParallaxData, ComponentInfo } from '../../../interfaces';

@Component({
  selector: 'wc-landing-zone-edit',
  templateUrl: './landing-zone-edit.component.html',
  styleUrls: ['./landing-zone-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingZoneEditComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];
  @Input() parallaxData: ParallaxData;

  @Output() savePhoto: EventEmitter<IPageComponentData>;

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[LANDING ZONE EDIT] -';
    this.savePhoto = new EventEmitter();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getInfo(): ComponentInfo {
    return null;
  }

  emitAction() {
    this.savePhoto.emit({ photos: this.photos, contents: this.contents });
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
