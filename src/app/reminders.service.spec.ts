import { TestBed } from '@angular/core/testing';

import { RemindersService } from './reminders.service';

describe('RemindersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemindersService = TestBed.get(RemindersService);
    expect(service).toBeTruthy();
  });
});
