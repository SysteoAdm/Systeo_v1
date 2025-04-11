import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudosNoNovoTestamentoRoutingModule } from './estudos-no-novo-testamento-routing.module';
import { EstudosNoNovoTestamentoComponent } from './estudos-no-novo-testamento.component';


@NgModule({
  declarations: [
    EstudosNoNovoTestamentoComponent
  ],
  imports: [
    CommonModule,
    EstudosNoNovoTestamentoRoutingModule
  ]
})
export class EstudosNoNovoTestamentoModule { }
