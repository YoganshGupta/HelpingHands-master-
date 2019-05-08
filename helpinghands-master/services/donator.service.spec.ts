import { TestBed } from '@angular/core/testing';

import { DonatorService } from './donator.service';

describe('DonatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonatorService = TestBed.get(DonatorService);
    expect(service).toBeTruthy();
  });
});
