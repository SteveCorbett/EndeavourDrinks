import { IBaseTable, BaseTable } from './baseTable';
import { ITrolleyItem } from './trolleyItem';

export interface ITrolley extends IBaseTable {
  trolleyId: string;
  customerId: number;
  items: ITrolleyItem[];
}

export class Trolley extends BaseTable implements ITrolley {
  public trolleyId: string = '';
  public customerId: number = 0;
  public items: ITrolleyItem[] = [];

  constructor(init?: Partial<ITrolley>) {
    super(init);
    Object.assign(this, init);
  }
}
