import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ITrolleyItem, TrolleyItem } from 'src/app/models/trolleyItem';
import { FormatValuePipe } from 'src/app/pipes/format-value.pipe';
import { TrolleyService } from 'src/app/services/trolley.service';

@Component({
  selector: 'app-trolley-item',
  standalone: true,
  imports: [
    CommonModule,
    FormatValuePipe,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './trolley-item.component.html',
  styleUrls: ['./trolley-item.component.css'],
})
export class TrolleyItemComponent {
  @Input({ required: true }) item: ITrolleyItem = new TrolleyItem();

  private trolleyService: TrolleyService = inject(TrolleyService);

  protected removeItem(item: ITrolleyItem): void {
    this.trolleyService.updateTrolley(
      this.trolleyService.trolley.trolleyId,
      item.product.productId,
      -item.quantity
    );
  }
}
