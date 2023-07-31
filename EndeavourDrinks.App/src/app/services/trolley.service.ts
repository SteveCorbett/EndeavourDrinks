import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalErrorHandler } from '../injectables/global-error.handler';
import { ITrolleyItem, TrolleyItem } from '../models/trolleyItem';
import { ITrolley, Trolley } from '../models/trolley';
import { ProductService } from './product.service';
import { ITrolleyGetResult } from '../models/APIs/trolleyGetResult';

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

  public readonly nullTrolley: ITrolley = new Trolley();

  public get trolley(): ITrolley {
    return this._trolleyBs.value;
  }

  constructor(
    private apiService: ApiService,
    private productService: ProductService,
    private errorHandler: GlobalErrorHandler
  ) {}

  getTrolley(customerId: number): void {
    this.apiService.getTrolley(customerId).subscribe({
      next: (response) => {
        this.processTrolleyResponse(response);
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  updateTrolley(trolleyId: string, productId: number, quantity: number): void {
    this.apiService.updateTrolley(trolleyId, productId, quantity).subscribe({
      next: (response) => {
        this.processTrolleyResponse(response);
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  private processTrolleyResponse(response: ITrolleyGetResult) {
    this.productService.clearTrolleyItems();
    if (!response) {
      this._itemsBs.next([]);
      this._trolleyBs.next(new Trolley());
      return;
    }
    this._trolleyBs.next(new Trolley(response.trolley));
    this._itemsBs.next(
      response.trolleyItems.map((item) => this.processTrolleyItem(item))
    );
    this._trolleyBs.value.items = this._itemsBs.value;
  }

  private processTrolleyItem(item: ITrolleyItem): ITrolleyItem {
    const result = new TrolleyItem(item);
    result.product = this.productService.getProduct(result.productId);
    result.product.trolleyItem = result;
    return result;
  }
}
