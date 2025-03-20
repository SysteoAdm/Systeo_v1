import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurusosAvancadoRoutingModule } from './curusos-avancado-routing.module';
import { CurusosAvancadoComponent } from './curusos-avancado.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CurusosAvancadoComponent
  ],
  imports: [
    CommonModule,
    CurusosAvancadoRoutingModule,
    SharedModule
  ]
})
export class CurusosAvancadoModule { }
