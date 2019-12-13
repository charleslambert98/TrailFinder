import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearPageComponent } from './gear-page.component';

describe('GearPageComponent', () => {
  let component: GearPageComponent;
  let fixture: ComponentFixture<GearPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
