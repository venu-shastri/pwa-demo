import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiSummaryResultComponent } from './emi-summary-result.component';

describe('EmiSummaryResultComponent', () => {
  let component: EmiSummaryResultComponent;
  let fixture: ComponentFixture<EmiSummaryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiSummaryResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiSummaryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
