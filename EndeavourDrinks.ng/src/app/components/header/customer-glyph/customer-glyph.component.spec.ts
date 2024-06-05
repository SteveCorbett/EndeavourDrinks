import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGlyphComponent } from './customer-glyph.component';
import { HttpClientModule } from '@angular/common/http';

describe('CustomerGlyphComponent', () => {
  let component: CustomerGlyphComponent;
  let fixture: ComponentFixture<CustomerGlyphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerGlyphComponent, HttpClientModule],
    });
    fixture = TestBed.createComponent(CustomerGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
