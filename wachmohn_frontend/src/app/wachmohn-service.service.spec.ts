import { TestBed } from '@angular/core/testing';

import { WachmohnServiceService } from './wachmohn-service.service';

describe('WachmohnServiceService', () => {
  let service: WachmohnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WachmohnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
