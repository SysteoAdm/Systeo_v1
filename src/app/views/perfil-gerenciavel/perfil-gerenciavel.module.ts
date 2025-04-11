import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilGerenciavelRoutingModule } from './perfil-gerenciavel-routing.module';
import { PerfilGerenciavelComponent } from './perfil-gerenciavel.component';


@NgModule({
  declarations: [
    PerfilGerenciavelComponent
  ],
  imports: [
    CommonModule,
    PerfilGerenciavelRoutingModule
  ]
})
export class PerfilGerenciavelModule { }
