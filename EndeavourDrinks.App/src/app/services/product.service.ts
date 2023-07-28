import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalErrorHandler } from '../injectables/global-error.handler';
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

  private _productMap = new Map<number, IProduct>();

  constructor(
    private apiService: ApiService,
    private errorHandler: GlobalErrorHandler
  ) {}

  public getProduct(productId: number): IProduct {
    let result: IProduct = this._productMap.get(productId) || new Product();
    return result;
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (response) => {
        this._productMap.clear();
        if (!response) {
          this._productsBs.next([]);
          return;
        }
        this._productsBs.next(
          response.map((product) => this.processProduct(product))
        );
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  private processProduct(product: IProduct): IProduct {
    const result = new Product(product);
    this._productMap.set(result.productId, result);
    return result;
  }
}
