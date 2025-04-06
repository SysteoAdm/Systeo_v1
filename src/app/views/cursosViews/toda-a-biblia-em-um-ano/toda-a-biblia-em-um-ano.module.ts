import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodaABibliaEmUmAnoRoutingModule } from './toda-a-biblia-em-um-ano-routing.module';
import { TodaABibliaEmUmAnoComponent } from './toda-a-biblia-em-um-ano.component';


@NgModule({
  declarations: [
    TodaABibliaEmUmAnoComponent
  ],
  imports: [
    CommonModule,
    TodaABibliaEmUmAnoRoutingModule
  ]
})
export class TodaABibliaEmUmAnoModule { }
