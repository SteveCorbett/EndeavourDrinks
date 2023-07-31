import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProdClassComponent } from './prod-class/prod-class.component';
import { NgFor } from '@angular/common';
import { CustomerService } from 'src/app/services/customer.service';
import { TrolleyService } from 'src/app/services/trolley.service';

export interface IProductClass {
  name: string;
  products: IProduct[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, ProdClassComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  classes: IProductClass[] = [];
  constructor(
    protected customerService: CustomerService,
    private productService: ProductService,
    private trolleyService: TrolleyService
  ) {
    this.productService.product$
      .pipe(takeUntilDestroyed())
      .subscribe((products: IProduct[]) => {
        this.processProducts(products);
      });
    this.trolleyService.getTrolley(customerService.customer.customerId);
  }

  private processProducts(products: IProduct[]): void {
    this.classes = [];
    if (!products || products.length === 0) {
      return;
    }
    products
      .filter((product: IProduct) => product.isActive)
      .forEach((product: IProduct) => {
        var ix = this.classes.findIndex((c) => c.name === product.productClass);
        var productClass: IProductClass;
        if (ix < 0) {
          productClass = {
            name: product.productClass,
            products: [product],
          };
          this.classes.push(productClass);
        } else {
          this.classes[ix].products.push(product);
        }
      });

    this.classes.sort((a, b) => {
      if ((a.name < b.name && a.name !== 'Other') || b.name === 'Other') {
        return -1;
      } else if (
        (b.name < a.name && b.name !== 'Other') ||
        a.name === 'Other'
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    this.classes.forEach((c) => {
      this.sort(c.products, 'productName');
    });
  }

  private sort<T>(array: T[], key: string): T[] {
    return array.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (b[key] < a[key]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
