import { TestBed } from '@angular/core/testing';

import { APITMDBService } from './api-tmdb.service';

describe('APITMDBService', () => {
  let service: APITMDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APITMDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
