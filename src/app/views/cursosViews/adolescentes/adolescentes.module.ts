import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdolescentesRoutingModule } from './adolescentes-routing.module';
import { AdolescentesComponent } from './adolescentes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdolescentesComponent
  ],
  imports: [
    CommonModule,
    AdolescentesRoutingModule,
    SharedModule
  ]
})
export class AdolescentesModule { }
