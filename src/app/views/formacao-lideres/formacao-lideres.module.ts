import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormacaoLideresRoutingModule } from './formacao-lideres-routing.module';
import { FormacaoLideresComponent } from './formacao-lideres.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormacaoLideresComponent
  ],
  imports: [
    CommonModule,
    FormacaoLideresRoutingModule,
    SharedModule
  ]
})
export class FormacaoLideresModule { }
