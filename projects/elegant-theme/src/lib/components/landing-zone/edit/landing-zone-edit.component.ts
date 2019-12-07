import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../../interfaces/page-collection';
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

  @Output() savePhotos: EventEmitter<PagePhoto[]>;
  @Output() openPhotosChooser: EventEmitter<any>;

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[LANDING ZONE EDIT] -';
    this.savePhotos = new EventEmitter();
    this.openPhotosChooser = new EventEmitter();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getInfo(): ComponentInfo {
    return null;
  }

  public openPhotosChoserHandler() {
    this.openPhotosChooser.emit();
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
