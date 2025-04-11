import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AVAdolescentesRoutingModule } from './av-adolescentes-routing.module';
import { AVAdolescentesComponent } from './av-adolescentes.component';


@NgModule({
  declarations: [
    AVAdolescentesComponent
  ],
  imports: [
    CommonModule,
    AVAdolescentesRoutingModule
  ]
})
export class AVAdolescentesModule { }
