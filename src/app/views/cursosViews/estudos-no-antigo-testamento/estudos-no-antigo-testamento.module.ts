import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudosNoAntigoTestamentoRoutingModule } from './estudos-no-antigo-testamento-routing.module';
import { EstudosNoAntigoTestamentoComponent } from './estudos-no-antigo-testamento.component';


@NgModule({
  declarations: [
    EstudosNoAntigoTestamentoComponent
  ],
  imports: [
    CommonModule,
    EstudosNoAntigoTestamentoRoutingModule
  ]
})
export class EstudosNoAntigoTestamentoModule { }
