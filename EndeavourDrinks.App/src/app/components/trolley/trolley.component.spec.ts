import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyComponent } from './trolley.component';
import { HttpClientModule } from '@angular/common/http';

describe('TrolleyComponent', () => {
  let component: TrolleyComponent;
  let fixture: ComponentFixture<TrolleyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrolleyComponent, HttpClientModule],
    });
    fixture = TestBed.createComponent(TrolleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
