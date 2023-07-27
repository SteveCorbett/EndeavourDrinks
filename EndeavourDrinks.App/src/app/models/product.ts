import { IBaseTable, BaseTable } from './baseTable';

export interface IProduct extends IBaseTable {
  productId: number;
  productCode: string;
  productName: string;
  productClass: string;
  salePrice: number;
}

export class Product extends BaseTable implements IProduct {
  public productId: number = 0;
  public productCode: string = '';
  public productName: string = '';
  public productClass: string = '';
  public salePrice: number = 0;

  public constructor(init?: Partial<IProduct>) {
    super(init);
    Object.assign(this, init);
  }
}
