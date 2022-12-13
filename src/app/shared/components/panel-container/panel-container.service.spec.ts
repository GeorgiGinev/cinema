import { TestBed } from '@angular/core/testing';

import { PanelContainerService } from './panel-container.service';

describe('PanelContainerService', () => {
  let service: PanelContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
