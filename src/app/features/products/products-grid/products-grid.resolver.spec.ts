import { TestBed } from '@angular/core/testing';

import { ProductsGridResolver } from './products-grid.resolver';

describe('ProductsGridResolver', () => {
  let resolver: ProductsGridResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsGridResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
