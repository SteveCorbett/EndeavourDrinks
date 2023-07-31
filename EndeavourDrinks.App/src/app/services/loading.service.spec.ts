import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ],
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
