import { TestBed } from '@angular/core/testing';

import { TravelPackagesService } from './travel-packages.service';

describe('TravelPackagesService', () => {
  let service: TravelPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
