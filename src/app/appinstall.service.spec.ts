import { TestBed } from '@angular/core/testing';

import { AppinstallService } from './appinstall.service';

describe('AppinstallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppinstallService = TestBed.get(AppinstallService);
    expect(service).toBeTruthy();
  });
});
