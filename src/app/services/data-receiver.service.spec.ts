import { TestBed } from '@angular/core/testing';

import { DataReceiverService } from './graph.service';

describe('GraphService', () => {
  let service: DataReceiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataReceiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
