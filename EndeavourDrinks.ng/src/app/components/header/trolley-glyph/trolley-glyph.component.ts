import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { TrolleyService } from 'src/app/services/trolley.service';
import { ICustomer } from 'src/app/models/customer';
import { ITrolleyItem } from 'src/app/models/trolleyItem';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trolley-glyph',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './trolley-glyph.component.html',
  styleUrls: ['./trolley-glyph.component.css'],
})
export class TrolleyGlyphComponent {
  protected customerId: number = 0;
  protected trolleyCount: number = 0;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private customerService: CustomerService,
    private router: Router,
    private trolleyService: TrolleyService
  ) {
    iconRegistry.addSvgIcon(
      'cart-outline',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/images/cart-outline.svg'
      )
    );
    this.customerService.customer$
      .pipe(takeUntilDestroyed())
      .subscribe((customer: ICustomer) => {
        this.customerId = customer.customerId;
      });
    this.trolleyService.items$
      .pipe(takeUntilDestroyed())
      .subscribe((items: ITrolleyItem[]) => {
        this.trolleyCount = items.length;
      });
  }

  protected openTrolley(): void {
    if (this.trolleyCount > 0) {
      this.router.navigate(['/trolley']);
    }
  }
}
