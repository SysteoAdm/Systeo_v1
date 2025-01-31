import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvimentoPessoalRoutingModule } from './desenvolvimento-pessoal-routing.module';
import { DesenvolvimentoPessoalComponent } from './desenvolvimento-pessoal.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DesenvolvimentoPessoalComponent
  ],
  imports: [
    CommonModule,
    DesenvolvimentoPessoalRoutingModule,
    SharedModule
  ]
})
export class DesenvolvimentoPessoalModule { }
