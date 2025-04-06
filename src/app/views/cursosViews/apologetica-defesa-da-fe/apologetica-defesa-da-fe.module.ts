import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApologeticaDefesaDaFeRoutingModule } from './apologetica-defesa-da-fe-routing.module';
import { ApologeticaDefesaDaFeComponent } from './apologetica-defesa-da-fe.component';


@NgModule({
  declarations: [
    ApologeticaDefesaDaFeComponent
  ],
  imports: [
    CommonModule,
    ApologeticaDefesaDaFeRoutingModule
  ]
})
export class ApologeticaDefesaDaFeModule { }
