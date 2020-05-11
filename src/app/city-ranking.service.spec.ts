import { TestBed } from '@angular/core/testing';

import { CityRankingService } from './city-ranking.service';

describe('CityRankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityRankingService = TestBed.get(CityRankingService);
    expect(service).toBeTruthy();
  });
});
