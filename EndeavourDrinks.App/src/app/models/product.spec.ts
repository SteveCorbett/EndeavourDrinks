import { IProduct, Product } from './product';

describe('Product.ts', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const partialProduct = {
      productId: 71,
      productName: 'Test Product',
      salePrice: 1.99,
      insertedDate: new Date(),
      updatedDate: new Date(),
      isActive: false,
    };
    partialProduct.insertedDate.setDate(
      partialProduct.insertedDate.getDate() - 1
    );

    const product = new Product(partialProduct);
    expect(product.productId).toEqual(partialProduct.productId);
    expect(product.productClass).toEqual('');
    expect(product.productName).toEqual(partialProduct.productName);
    expect(product.salePrice).toEqual(partialProduct.salePrice);
    expect(product.insertedDate).toEqual(partialProduct.insertedDate);
    expect(product.updatedDate).toEqual(partialProduct.updatedDate);
    expect(product.isActive).toEqual(partialProduct.isActive);
  });
});
