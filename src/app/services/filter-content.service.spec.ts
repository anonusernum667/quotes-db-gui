import { TestBed } from '@angular/core/testing';

import { FilterContentService } from './filter-content.service';

describe('FilterContentService', () => {
  let service: FilterContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
