import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdClassComponent } from './prod-class.component';

describe('ProdClassComponent', () => {
  let component: ProdClassComponent;
  let fixture: ComponentFixture<ProdClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdClassComponent]
    });
    fixture = TestBed.createComponent(ProdClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
