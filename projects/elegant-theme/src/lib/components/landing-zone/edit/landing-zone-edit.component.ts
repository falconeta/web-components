import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { NGXLogger } from 'ngx-logger';
import { ParallaxData, ComponentInfo, IPhotosChooserEmitter, ISubContent, IDatasToSave } from '../../../interfaces';
import { Observable, of } from 'rxjs';
import { PhotoCollectionModel } from '../../../models';

@Component({
  selector: 'wc-landing-zone-edit',
  templateUrl: './landing-zone-edit.component.html',
  styleUrls: ['./landing-zone-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingZoneEditComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input()
  set photos(photos: PhotoCollectionModel[]) {
    this.photoSelected = photos[0];
  }

  @Input() contents: ISubContent[];
  @Input() parallaxData: ParallaxData;

  @Output() datasToSave: EventEmitter<IDatasToSave>;
  @Output() openPhotosChooser: EventEmitter<IPhotosChooserEmitter>;
  @Output() dismissCall: EventEmitter<() => Observable<null>>;

  public photoSelected: PhotoCollectionModel;

  constructor(protected log: NGXLogger, protected injector: Injector) {
    super(log, injector);
    this.logPrefix = '[LANDING ZONE EDIT] -';
    this.datasToSave = new EventEmitter();
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
    this.openPhotosChooser.emit({ photoLimit: 1, callBack: this.setNewPhoto.bind(this), photosSelected: [this.photoSelected] });
  }

  private onDismiss(): Observable<boolean> {
    this.log.debug(`${this.logPrefix} dismissing`);
    return of(null);
  }

  private setNewPhoto(photos: PhotoCollectionModel[]) {
    if (photos) {
      this.log.debug(`${this.logPrefix} setNewPhoto`, photos);
      this.photoSelected = photos[0];
      this.datasToSave.emit({ photos });
    }
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
