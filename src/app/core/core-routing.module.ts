import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path:"",
    component: CoreComponent,
    children:[
      {
        path:"",
        loadChildren: ()=> import('../features/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:"auth",
        loadChildren: ()=> import('../features/auth/auth.module').then(m=>m.AuthModule)
      },
      {
        path: "products",
        loadChildren: ()=> import('../features/products/products.module').then(m=>m.ProductsModule)
      },
      {
        path: "checkout",
        loadChildren: ()=> import('../features/checkout/checkout.module').then(m=>m.CheckoutModule)
      },
      {
        path: "teasers",
        loadChildren: ()=> import('../features/teasers/teasers.module').then(m=>m.TeasersModule)
      }
    ]
  },
  {
    path:"**",
    pathMatch: "full",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
