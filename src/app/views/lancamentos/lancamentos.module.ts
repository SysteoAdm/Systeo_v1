import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosComponent } from './lancamentos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    SharedModule
  ]
})
export class LancamentosModule { }
