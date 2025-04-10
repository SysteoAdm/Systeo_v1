import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhasAvalicacoesRoutingModule } from './minhas-avalicacoes-routing.module';
import { MinhasAvalicacoesComponent } from './minhas-avalicacoes.component';


@NgModule({
  declarations: [
    MinhasAvalicacoesComponent
  ],
  imports: [
    CommonModule,
    MinhasAvalicacoesRoutingModule
  ]
})
export class MinhasAvalicacoesModule { }
