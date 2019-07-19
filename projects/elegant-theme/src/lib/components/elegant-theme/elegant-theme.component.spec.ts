import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantThemeComponent } from './elegant-theme.component';

describe('ElegantThemeComponent', () => {
  let component: ElegantThemeComponent;
  let fixture: ComponentFixture<ElegantThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegantThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegantThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
