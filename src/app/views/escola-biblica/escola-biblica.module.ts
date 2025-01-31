import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolaBiblicaRoutingModule } from './escola-biblica-routing.module';
import { EscolaBiblicaComponent } from './escola-biblica.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EscolaBiblicaComponent
  ],
  imports: [
    CommonModule,
    EscolaBiblicaRoutingModule,
    SharedModule
  ]
})
export class EscolaBiblicaModule { }
