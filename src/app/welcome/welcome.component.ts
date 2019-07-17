import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'custom-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WelcomeComponent implements OnInit, OnChanges {
  @Input() page: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('pageeeeeeeeeeeee moduleeeeee changes angular', this.page);
  }
  ngOnInit() {
    console.log('pageeeeeeeeeeeee moduleeeeee', this.page);
  }
}
