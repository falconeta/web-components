import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, Injector, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { NGXLogger } from 'ngx-logger';
import { ParallaxData, ComponentInfo, IPhotosChooserEmitter, ISubPhoto, ISubContent, IDatasToSave } from '../../../interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'wc-landing-zone-edit',
  templateUrl: './landing-zone-edit.component.html',
  styleUrls: ['./landing-zone-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingZoneEditComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input()
  set photos(photos: ISubPhoto[]) {
    this.photoSelected = photos[0];
  }

  @Input() contents: ISubContent[];
  @Input() parallaxData: ParallaxData;

  @Output() datasToSave: EventEmitter<IDatasToSave>;
  @Output() openPhotosChooser: EventEmitter<IPhotosChooserEmitter>;
  @Output() dismissCall: EventEmitter<() => Observable<null>>;

  public photoSelected: ISubPhoto;

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
    this.openPhotosChooser.emit({ photoLimit: 1, callBack: this.setNewPhoto.bind(this) });
  }

  private onDismiss(): Observable<boolean> {
    this.log.debug(`${this.logPrefix} dismissing`);
    return of(null);
  }

  private setNewPhoto(photo: ISubPhoto) {
    if (photo) {
      this.log.debug(`${this.logPrefix} setNewPhoto`, photo);
      this.photoSelected = photo;
      this.datasToSave.emit({ photos: [photo] });
    }
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} destroyed...`);
  }
}
