import { BaseTable, IBaseTable } from './baseTable';

export interface ICustomer extends IBaseTable {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  fullName: string;
}

export class Customer extends BaseTable implements ICustomer {
  public customerId: number = 0;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';

  public get fullName(): string {
    return (this.firstName + ' ' + this.lastName).trim();
  }

  public constructor(init?: Partial<ICustomer>) {
    super(init);
    Object.assign(this, init);
  }
}
