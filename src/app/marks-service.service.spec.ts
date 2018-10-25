import { TestBed, inject } from '@angular/core/testing';

import { MarksServiceService } from './marks-service.service';

describe('MarksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarksServiceService]
    });
  });

  it('should be created', inject([MarksServiceService], (service: MarksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
