import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsSalmosRoutingModule } from './os-salmos-routing.module';
import { OsSalmosComponent } from './os-salmos.component';


@NgModule({
  declarations: [
    OsSalmosComponent
  ],
  imports: [
    CommonModule,
    OsSalmosRoutingModule
  ]
})
export class OsSalmosModule { }
