import { NGXLogger } from 'ngx-logger';
import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import { UnitAvailable } from '../../enums';
import { ElementPosition } from '../../interfaces';

@Directive({
  selector: '[wcParallax]'
})
export class ParallaxDirective implements OnInit, OnDestroy, OnChanges {
  @Input() ratio: number;
  @Input() unit: UnitAvailable;
  @Input() scrollData: UIEvent;
  @Input() containerResized: Element;
  @Input() direction: 'up' | 'down';

  private logPrefix: string;
  private scrollValue: number;
  private position: ElementPosition;

  constructor(private elementRef: ElementRef, private log: NGXLogger, private readonly zone: NgZone, private renderer: Renderer2) {
    this.logPrefix = '[PARALLAX DIRECTIVE] -';
    this.ratio = 1;
    this.unit = UnitAvailable.PX;
    this.scrollValue = 0;
  }

  ngOnInit() {
    this.initElement();
    if (this.unit === UnitAvailable.VH) {
      this.ratio = this.ratio / 100;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        if (change.currentValue) {
          switch (propName) {
            case 'scrollData':
              this.scrollListenerSUB();
              break;
            case 'containerResized':
              this.scrollListenerAfterWindowResizedSUB();
              break;
          }
        }
      }
    }
  }

  private initElement() {
    let top = this.elementRef.nativeElement.getBoundingClientRect().top;
    let bottom = top + this.elementRef.nativeElement.getBoundingClientRect().height;
    const marginTop = this.elementRef.nativeElement.offsetTop;
    if (this.scrollValue && top) {
      top += this.scrollValue;
      bottom += this.scrollValue;
    }
    this.position = {
      top,
      bottom,
      marginTop
    };
  }

  private scrollListenerSUB() {
    this.zone.runOutsideAngular(() => {
      this.scrollValue = this.scrollData.target['scrollTop'];
      if (this.scrollValue < this.position.bottom) {
        this.changeTopValue();
      }
    });
  }

  private scrollListenerAfterWindowResizedSUB() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', null);
    this.scrollValue = this.containerResized.scrollTop;
    this.initElement();
    this.changeTopValue();
  }

  private changeTopValue() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translateY(${(this.direction === 'down' ? '' : '-') + (this.scrollValue * this.ratio) + this.unit})`
    );
  }

  ngOnDestroy() {
    this.log.debug(`${this.logPrefix} on container destroyed...`);
  }
}
