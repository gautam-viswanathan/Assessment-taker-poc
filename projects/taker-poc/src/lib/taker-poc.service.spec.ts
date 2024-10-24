import { TestBed } from '@angular/core/testing';

import { TakerPocService } from './taker-poc.service';

describe('TakerPocService', () => {
  let service: TakerPocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakerPocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
