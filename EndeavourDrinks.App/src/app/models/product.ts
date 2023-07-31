import { IBaseTable, BaseTable } from './baseTable';
import { ITrolleyItem, TrolleyItem } from './trolleyItem';

export interface IProduct extends IBaseTable {
  productId: number;
  productCode: string;
  productName: string;
  productClass: string;
  rrp: number;
  discPcnt: number;
  discAmount: number;
  salePrice: number;
  trolleyItem?: ITrolleyItem;
}

export class Product extends BaseTable implements IProduct {
  public productId: number = 0;
  public productCode: string = '';
  public productName: string = '';
  public productClass: string = '';
  public rrp: number = 0;
  public discPcnt: number = 0;
  public discAmount: number = 0;
  public salePrice: number = 0;
  public trolleyItem?: ITrolleyItem = undefined;

  public constructor(init?: Partial<IProduct>) {
    super(init);
    Object.assign(this, init);
  }
}
