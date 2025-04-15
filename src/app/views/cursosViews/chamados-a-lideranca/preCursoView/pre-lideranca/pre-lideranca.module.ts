import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreLiderancaRoutingModule } from './pre-lideranca-routing.module';
import { PreLiderancaComponent } from './pre-lideranca.component';


@NgModule({
  declarations: [
    PreLiderancaComponent
  ],
  imports: [
    CommonModule,
    PreLiderancaRoutingModule
  ]
})
export class PreLiderancaModule { }
