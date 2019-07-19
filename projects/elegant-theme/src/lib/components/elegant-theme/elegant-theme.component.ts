import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wc-elegant-theme',
  template: `
    <p>
      elegant-theme works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElegantThemeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('elegant theme started');
  }
}
