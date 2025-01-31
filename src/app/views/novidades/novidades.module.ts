import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovidadesRoutingModule } from './novidades-routing.module';
import { NovidadesComponent } from './novidades.component';


@NgModule({
  declarations: [
    NovidadesComponent
  ],
  imports: [
    CommonModule,
    NovidadesRoutingModule
  ]
})
export class NovidadesModule { }
