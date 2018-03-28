import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpFloorPlansComponent } from './fp-floor-plans.component';

describe('FpFloorPlansComponent', () => {
  let component: FpFloorPlansComponent;
  let fixture: ComponentFixture<FpFloorPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpFloorPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpFloorPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
