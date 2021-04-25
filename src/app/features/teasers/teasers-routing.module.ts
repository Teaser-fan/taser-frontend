import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeasersGridComponent } from './teasers-grid/teasers-grid.component';

const routes: Routes = [
  {
    path:"",
    component: TeasersGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeasersRoutingModule { }
