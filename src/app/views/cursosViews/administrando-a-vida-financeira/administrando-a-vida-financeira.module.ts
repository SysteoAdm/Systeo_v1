import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrandoAVidaFinanceiraRoutingModule } from './administrando-a-vida-financeira-routing.module';
import { AdministrandoAVidaFinanceiraComponent } from './administrando-a-vida-financeira.component';


@NgModule({
  declarations: [
    AdministrandoAVidaFinanceiraComponent
  ],
  imports: [
    CommonModule,
    AdministrandoAVidaFinanceiraRoutingModule
  ]
})
export class AdministrandoAVidaFinanceiraModule { }
