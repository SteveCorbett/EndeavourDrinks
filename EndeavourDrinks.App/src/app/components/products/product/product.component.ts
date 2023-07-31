import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormatValuePipe } from 'src/app/pipes/format-value.pipe';
import { IProduct, Product } from 'src/app/models/product';
import { TrolleyService } from 'src/app/services/trolley.service';
import { ITrolley } from 'src/app/models/trolley';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormatValuePipe,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input({ required: true }) product: IProduct = new Product();

  private trolleyService: TrolleyService = inject(TrolleyService);
  private trolley: ITrolley = this.trolleyService.nullTrolley;

  constructor() {
    this.trolleyService.trolley$
      .pipe(takeUntilDestroyed())
      .subscribe((trolley: ITrolley) => {
        this.trolley = trolley;
      });
  }

  public addToTrolley(quantity: number): void {
    if (this.trolley.trolleyId !== '') {
      this.trolleyService.updateTrolley(
        this.trolley.trolleyId,
        this.product.productId,
        quantity
      );
    }
  }
}
