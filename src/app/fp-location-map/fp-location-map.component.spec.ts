import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpLocationMapComponent } from './fp-location-map.component';

describe('FpLocationMapComponent', () => {
  let component: FpLocationMapComponent;
  let fixture: ComponentFixture<FpLocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpLocationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
