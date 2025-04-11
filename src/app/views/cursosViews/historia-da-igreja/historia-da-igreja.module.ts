import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaDaIgrejaRoutingModule } from './historia-da-igreja-routing.module';
import { HistoriaDaIgrejaComponent } from './historia-da-igreja.component';


@NgModule({
  declarations: [
    HistoriaDaIgrejaComponent
  ],
  imports: [
    CommonModule,
    HistoriaDaIgrejaRoutingModule
  ]
})
export class HistoriaDaIgrejaModule { }
