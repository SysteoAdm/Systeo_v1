import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesDaFeCristaRoutingModule } from './bases-da-fe-crista-routing.module';
import { BasesDaFeCristaComponent } from './bases-da-fe-crista.component';


@NgModule({
  declarations: [
    BasesDaFeCristaComponent
  ],
  imports: [
    CommonModule,
    BasesDaFeCristaRoutingModule
  ]
})
export class BasesDaFeCristaModule { }
