import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdolescentesRoutingModule } from './adolescentes-routing.module';
import { AdolescentesComponent } from './adolescentes.component';


@NgModule({
  declarations: [
    AdolescentesComponent
  ],
  imports: [
    CommonModule,
    AdolescentesRoutingModule
  ]
})
export class AdolescentesModule { }
