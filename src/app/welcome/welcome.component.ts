import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-welcome',
  template: `
    <p>
      welcome works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
