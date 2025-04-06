import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmaNovaVidaRoutingModule } from './uma-nova-vida-routing.module';
import { UmaNovaVidaComponent } from './uma-nova-vida.component';


@NgModule({
  declarations: [
    UmaNovaVidaComponent
  ],
  imports: [
    CommonModule,
    UmaNovaVidaRoutingModule
  ]
})
export class UmaNovaVidaModule { }
