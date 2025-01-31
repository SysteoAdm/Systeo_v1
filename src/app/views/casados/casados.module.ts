import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasadosRoutingModule } from './casados-routing.module';
import { CasadosComponent } from './casados.component';


@NgModule({
  declarations: [
    CasadosComponent
  ],
  imports: [
    CommonModule,
    CasadosRoutingModule
  ]
})
export class CasadosModule { }
