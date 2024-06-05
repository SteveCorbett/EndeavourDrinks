import { IBaseTable, BaseTable } from './baseTable';
import { ITrolleyItem } from './trolleyItem';

export interface ITrolley extends IBaseTable {
  trolleyId: string;
  customerId: number;
  subTotal: number;
  discounts: number;
  orderTotal: number;
  items: ITrolleyItem[];
}

export class Trolley extends BaseTable implements ITrolley {
  public trolleyId: string = '';
  public customerId: number = 0;
  subTotal: number = 0;
  discounts: number = 0;
  orderTotal: number = 0;
  public items: ITrolleyItem[] = [];

  constructor(init?: Partial<ITrolley>) {
    super(init);
    Object.assign(this, init);
  }
}
