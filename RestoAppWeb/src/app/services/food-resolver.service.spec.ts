import { TestBed, inject } from '@angular/core/testing';

import { FoodResolverService } from './food-resolver.service';

describe('FoodResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodResolverService]
    });
  });

  it('should be created', inject([FoodResolverService], (service: FoodResolverService) => {
    expect(service).toBeTruthy();
  }));
});
