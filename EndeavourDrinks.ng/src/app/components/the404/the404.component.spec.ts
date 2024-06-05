import { ComponentFixture, TestBed } from '@angular/core/testing';

import { The404Component } from './the404.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('The404Component', () => {
  let component: The404Component;
  let fixture: ComponentFixture<The404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [The404Component, RouterTestingModule],
    });
    fixture = TestBed.createComponent(The404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
