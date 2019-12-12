import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto, PageContent } from '../../../interfaces/page-collection';
import { ParallaxData, ComponentInfo, IPhotosChooserEmitter } from '../../../interfaces';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'wc-landing-zone-edit',
  templateUrl: './landing-zone-edit.component.html',
  styleUrls: ['./landing-zone-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingZoneEditComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() photos: PagePhoto[];
  @Input() contents: PageContent[];
  @Input() parallaxData: ParallaxData;

  @Output() savePhotos: EventEmitter<PagePhoto[]>;
  @Output() openPhotosChooser: EventEmitter<IPhotosChooserEmitter>;
  @Output() dismissCall: EventEmitter<() => Observable<null>>;

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[LANDING ZONE EDIT] -';
    this.savePhotos = new EventEmitter();
    this.openPhotosChooser = new EventEmitter();
    this.dismissCall = new EventEmitter();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    this.emitStartOutput();
  }

  private emitStartOutput() {
    setTimeout(() => {
      // start output
      this.dismissCall.emit(this.onDismiss.bind(this));
    });
  }

  getInfo(): ComponentInfo {
    return null;
  }

  public openPhotosChoserHandler() {
    this.openPhotosChooser.emit({ photoLimit: 1, callBack: this.setNewPhoto.bind(this) });
  }

  private onDismiss(): Observable<null> {
    this.log.debug(`${this.logPrefix} dismissing`);
    return of(null).pipe(delay(1000)); // just for test :)
  }

  private setNewPhoto(photo: PagePhoto) {
    this.log.debug(`${this.logPrefix} setNewPhoto`, photo);
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
