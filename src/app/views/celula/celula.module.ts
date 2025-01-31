import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelulaRoutingModule } from './celula-routing.module';
import { CelulaComponent } from './celula.component';


@NgModule({
  declarations: [
    CelulaComponent
  ],
  imports: [
    CommonModule,
    CelulaRoutingModule
  ]
})
export class CelulaModule { }
