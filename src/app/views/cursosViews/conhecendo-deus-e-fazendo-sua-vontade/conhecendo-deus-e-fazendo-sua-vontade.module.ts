import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConhecendoDeusEFazendoSuaVontadeRoutingModule } from './conhecendo-deus-e-fazendo-sua-vontade-routing.module';
import { ConhecendoDeusEFazendoSuaVontadeComponent } from './conhecendo-deus-e-fazendo-sua-vontade.component';


@NgModule({
  declarations: [
    ConhecendoDeusEFazendoSuaVontadeComponent
  ],
  imports: [
    CommonModule,
    ConhecendoDeusEFazendoSuaVontadeRoutingModule
  ]
})
export class ConhecendoDeusEFazendoSuaVontadeModule { }
