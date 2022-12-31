import { TestBed } from '@angular/core/testing';
import { MovieSlotService } from './movie-slot.service';

describe('MovieSlotService', () => {
  let service: MovieSlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieSlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
