import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CustomerGlyphComponent } from './customer-glyph/customer-glyph.component';
import { TrolleyGlyphComponent } from './trolley-glyph/trolley-glyph.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    CustomerGlyphComponent,
    TrolleyGlyphComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
