import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalErrorHandler } from '../injectables/global-error.handler';
import { Customer, ICustomer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _customerBs: BehaviorSubject<ICustomer> = new BehaviorSubject(
    new Customer()
  );
  public readonly customer$: Observable<ICustomer> =
    this._customerBs.asObservable();

  public get customer(): ICustomer {
    return this._customerBs.value;
  }

  public get isLoggedIn(): boolean {
    return this._customerBs.value.customerId !== 0;
  }

  constructor(
    private apiService: ApiService,
    private errorHandler: GlobalErrorHandler
  ) {}

  getCustomer(customerId: number): void {
    this.apiService.getCustomer(customerId).subscribe({
      next: (response) => {
        this._customerBs.next(new Customer(response));
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      },
    });
  }
}
