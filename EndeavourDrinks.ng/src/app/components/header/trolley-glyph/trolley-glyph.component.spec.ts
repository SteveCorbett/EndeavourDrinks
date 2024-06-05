import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyGlyphComponent } from './trolley-glyph.component';
import { HttpClientModule } from '@angular/common/http';

describe('TrolleyGlyphComponent', () => {
  let component: TrolleyGlyphComponent;
  let fixture: ComponentFixture<TrolleyGlyphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrolleyGlyphComponent, HttpClientModule],
    });
    fixture = TestBed.createComponent(TrolleyGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
