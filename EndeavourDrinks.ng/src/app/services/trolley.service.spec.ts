import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { TrolleyService } from './trolley.service';

describe('TrolleyService', () => {
  let service: TrolleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(TrolleyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
