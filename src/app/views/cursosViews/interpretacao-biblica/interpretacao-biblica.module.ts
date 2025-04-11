import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpretacaoBiblicaRoutingModule } from './interpretacao-biblica-routing.module';
import { InterpretacaoBiblicaComponent } from './interpretacao-biblica.component';


@NgModule({
  declarations: [
    InterpretacaoBiblicaComponent
  ],
  imports: [
    CommonModule,
    InterpretacaoBiblicaRoutingModule
  ]
})
export class InterpretacaoBiblicaModule { }
