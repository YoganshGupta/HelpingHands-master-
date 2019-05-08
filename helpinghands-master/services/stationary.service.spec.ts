import { TestBed } from '@angular/core/testing';

import { StationaryService } from './stationary.service';

describe('StationaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StationaryService = TestBed.get(StationaryService);
    expect(service).toBeTruthy();
  });
});
