import { TestBed } from '@angular/core/testing';

import { VideogameDataService } from './videogame-data.service';

describe('VideogameDataService', () => {
  let service: VideogameDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
