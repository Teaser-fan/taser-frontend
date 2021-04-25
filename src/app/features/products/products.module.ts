import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductBuyComponent } from './product-buy/product-buy.component';
import { ProductBidComponent } from './product-bid/product-bid.component';


@NgModule({
  declarations: [ProductsGridComponent, ProductBuyComponent, ProductBidComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
