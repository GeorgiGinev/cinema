import { TestBed } from '@angular/core/testing';

import { PanelPageService } from './panel-page.service';

describe('PanelPageService', () => {
  let service: PanelPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
