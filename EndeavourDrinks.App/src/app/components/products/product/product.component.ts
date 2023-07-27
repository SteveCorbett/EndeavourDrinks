import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct, Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input({ required: true }) product: IProduct = new Product();
}
