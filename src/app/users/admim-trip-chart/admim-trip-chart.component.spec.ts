import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimTripChartComponent } from './admim-trip-chart.component';

describe('AdmimTripChartComponent', () => {
  let component: AdmimTripChartComponent;
  let fixture: ComponentFixture<AdmimTripChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmimTripChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmimTripChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
