import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarNovoUsuarioRoutingModule } from './criar-novo-usuario-routing.module';
import { CriarNovoUsuarioComponent } from './criar-novo-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CriarNovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    CriarNovoUsuarioRoutingModule,
    SharedModule
  ]
})
export class CriarNovoUsuarioModule { }
