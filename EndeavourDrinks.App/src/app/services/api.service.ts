import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICustomer } from '../models/customer';
import { IProduct } from '../models/product';
import { ITrolleyGetResult } from '../models/APIs/trolleyGetResult';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // ToDo: Move these to a config file
  private customerUrl: string = 'api/Customer/';
  private productUrl: string = 'api/Product/';
  private trolleyUrl: string = 'api/Trolley/';

  constructor(private httpClient: HttpClient) {}

  getCustomer(customerId: number): Observable<ICustomer> {
    const apiStr: string = this.customerUrl + 'GetCustomer/' + customerId;
    return this.httpClient.get<ICustomer>(apiStr);
  }

  getProducts(): Observable<IProduct[]> {
    const apiStr: string = this.productUrl + 'GetProducts';
    return this.httpClient.get<IProduct[]>(apiStr);
  }

  getTrolley(customerId: number): Observable<ITrolleyGetResult> {
    const apiStr: string = this.trolleyUrl + 'GetTrolley/' + customerId;
    return this.httpClient.get<ITrolleyGetResult>(apiStr);
  }
}
