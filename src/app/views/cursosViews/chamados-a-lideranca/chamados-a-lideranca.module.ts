import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosALiderancaRoutingModule } from './chamados-a-lideranca-routing.module';
import { ChamadosALiderancaComponent } from './chamados-a-lideranca.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChamadosALiderancaComponent
  ],
  imports: [
    CommonModule,
    ChamadosALiderancaRoutingModule,
    SharedModule
  ]
})
export class ChamadosALiderancaModule { }
