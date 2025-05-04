import { TestBed } from '@angular/core/testing';

import { ReportTripService } from './report-trip.service';

describe('ReportTripService', () => {
  let service: ReportTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
