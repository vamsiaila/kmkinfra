import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpOverviewComponent } from './fp-overview.component';

describe('FpOverviewComponent', () => {
  let component: FpOverviewComponent;
  let fixture: ComponentFixture<FpOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
