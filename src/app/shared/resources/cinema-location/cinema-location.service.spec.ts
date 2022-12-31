import { TestBed } from '@angular/core/testing';

import { CinemaLocationService } from './cinema-location.service';

describe('CinemaLocationService', () => {
  let service: CinemaLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
