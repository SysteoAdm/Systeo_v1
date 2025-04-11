import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasaisRoutingModule } from './casais-routing.module';
import { CasaisComponent } from './casais.component';


@NgModule({
  declarations: [
    CasaisComponent
  ],
  imports: [
    CommonModule,
    CasaisRoutingModule
  ]
})
export class CasaisModule { }
