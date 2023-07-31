import { IBaseTable, BaseTable } from './baseTable';
import { IProduct, Product } from './product';

export interface ITrolleyItem extends IBaseTable {
  trolleyItemId: string;
  trolleyId: string;
  sequence: number;
  productId: number;
  rrp: number;
  discPcnt: number;
  discAmount: number;
  salePrice: number;
  quantity: number;
  product: IProduct;
}

export class TrolleyItem extends BaseTable implements ITrolleyItem {
  public trolleyItemId: string = '';
  public trolleyId: string = '';
  public sequence: number = 0;
  public productId: number = 0;
  public rrp: number = 0;
  public discPcnt: number = 0;
  public discAmount: number = 0;
  public salePrice: number = 0;
  public quantity: number = 0;
  public product: IProduct = new Product();

  constructor(init?: Partial<TrolleyItem>) {
    super(init);
    Object.assign(this, init);
  }
}
