import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalErrorHandler } from '../injectables/global-error.handler';
import { Customer, ICustomer } from '../models/customer';
import { IProduct, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productsBs: BehaviorSubject<IProduct[]> = new BehaviorSubject<
    IProduct[]
  >([]);
  public readonly product$: Observable<IProduct[]> =
    this._productsBs.asObservable();

  constructor(
    private apiService: ApiService,
    private errorHandler: GlobalErrorHandler
  ) {}

  getProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (response) => {
        if (!response) {
          this._productsBs.next([]);
          return;
        }
        this._productsBs.next(response.map((product) => new Product(product)));
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      },
    });
  }
}
