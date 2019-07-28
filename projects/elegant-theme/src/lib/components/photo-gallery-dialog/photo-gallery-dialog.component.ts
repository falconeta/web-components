import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BaseComponent } from '../base.component';
import { NGXLogger } from 'ngx-logger';
import { PagePhoto } from '../../interfaces/page-collection';

@Component({
  selector: 'wc-photo-gallery-dialog',
  templateUrl: './photo-gallery-dialog.component.html',
  styleUrls: ['./photo-gallery-dialog.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PhotoGalleryDialogComponent extends BaseComponent implements OnInit, OnChanges {
  public percentProgressBar: number;

  @Input() photos: PagePhoto[];
  @Input() index: number;

  @Output() closed: EventEmitter<string>;

  constructor(protected log: NGXLogger) {
    super(log);

    this.logPrefix = '[PHOTO GALLERY DIALOG] -';
    this.closed = new EventEmitter<string>();

    this.percentProgressBar = 0;
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        if (change.firstChange) {
          this.calcPercentProgressBar();
        }
      }
    }
  }

  onClose() {
    this.closed.emit('dialog closed');
  }

  public navigatePhoto(direction: string) {
    direction === '+' ? this.index++ : this.index--;
    this.calcPercentProgressBar();
  }

  private calcPercentProgressBar() {
    if (this.photos) {
      this.percentProgressBar = (100 * (this.photos.length - (this.photos.length - (this.index + 1)))) / this.photos.length;
    }
  }
}
