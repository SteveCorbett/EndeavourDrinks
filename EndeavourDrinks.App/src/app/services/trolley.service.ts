import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalErrorHandler } from '../injectables/global-error.handler';
import { ITrolleyItem, TrolleyItem } from '../models/trolleyItem';
import { ITrolley, Trolley } from '../models/trolley';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class TrolleyService {
  private _itemsBs: BehaviorSubject<ITrolleyItem[]> = new BehaviorSubject<
    ITrolleyItem[]
  >([]);
  public readonly items$: Observable<ITrolleyItem[]> =
    this._itemsBs.asObservable();

  private _trolleyBs: BehaviorSubject<ITrolley> = new BehaviorSubject<ITrolley>(
    new Trolley()
  );
  public readonly trolley$: Observable<ITrolley> =
    this._trolleyBs.asObservable();

  constructor(
    private apiService: ApiService,
    private productService: ProductService,
    private errorHandler: GlobalErrorHandler
  ) {}

  getTrolley(customerId: number): void {
    this.apiService.getTrolley(customerId).subscribe({
      next: (response) => {
        if (!response) {
          this._itemsBs.next([]);
          this._trolleyBs.next(new Trolley());
          return;
        }
        this._trolleyBs.next(new Trolley(response.trolley));
        this._itemsBs.next(
          response.trolleyItems.map((item) => this.processTrolleyItem(item))
        );
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  private processTrolleyItem(item: ITrolleyItem): ITrolleyItem {
    const result = new TrolleyItem(item);
    result.product = this.productService.getProduct(result.productId);
    return result;
  }
}
