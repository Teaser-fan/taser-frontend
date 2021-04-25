import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeasersRoutingModule } from './teasers-routing.module';
import { TeasersGridComponent } from './teasers-grid/teasers-grid.component';


@NgModule({
  declarations: [TeasersGridComponent],
  imports: [
    CommonModule,
    TeasersRoutingModule
  ]
})
export class TeasersModule { }
