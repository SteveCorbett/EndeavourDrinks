import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyItemComponent } from './trolley-item.component';

describe('TrolleyItemComponent', () => {
  let component: TrolleyItemComponent;
  let fixture: ComponentFixture<TrolleyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrolleyItemComponent],
    });
    fixture = TestBed.createComponent(TrolleyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
