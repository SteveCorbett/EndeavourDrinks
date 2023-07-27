import { Component, Input } from '@angular/core';
import { IProductClass } from '../products.component';
import { NgFor } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-prod-class',
  standalone: true,
  imports: [NgFor, ProductComponent],
  templateUrl: './prod-class.component.html',
  styleUrls: ['./prod-class.component.css'],
})
export class ProdClassComponent {
  @Input({ required: true }) productClass: IProductClass = {
    name: '',
    products: [],
  };
}
