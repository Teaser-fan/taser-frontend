import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBidComponent } from './product-bid/product-bid.component';
import { ProductBuyComponent } from './product-buy/product-buy.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';

const routes: Routes = [
  {
    path:"",
    component: ProductsGridComponent
  },
  {
    path:"buy",
    component: ProductBuyComponent
  },
  {
    path: "bid",
    component: ProductBidComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
