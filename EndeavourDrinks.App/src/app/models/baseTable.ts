export interface IBaseTable {
  insertedDate: Date;
  insertedBy: string;
  updatedDate: Date;
  updatedBy: string;
  isActive: boolean;
}

export class BaseTable implements IBaseTable {
  public insertedDate: Date = new Date();
  public insertedBy: string = '';
  public updatedDate: Date = new Date();
  public updatedBy: string = '';
  public isActive: boolean = false;

  constructor(init?: Partial<IBaseTable>) {
    Object.assign(this, init);
  }
}
