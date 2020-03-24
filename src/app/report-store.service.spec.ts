import { TestBed } from '@angular/core/testing';

import { ReportStoreService } from './report-store.service';

describe('ReportStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportStoreService = TestBed.get(ReportStoreService);
    expect(service).toBeTruthy();
  });
});
