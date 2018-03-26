import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpProjectHighlightsComponent } from './fp-project-highlights.component';

describe('FpProjectHighlightsComponent', () => {
  let component: FpProjectHighlightsComponent;
  let fixture: ComponentFixture<FpProjectHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpProjectHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpProjectHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
