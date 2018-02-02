import { TestBed, inject } from '@angular/core/testing';

import { FinanzeService } from './finanze.service';

describe('FinanzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinanzeService]
    });
  });

  it('should be created', inject([FinanzeService], (service: FinanzeService) => {
    expect(service).toBeTruthy();
  }));
});
