import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaleConoscoRoutingModule } from './fale-conosco-routing.module';
import { FaleConoscoComponent } from './fale-conosco.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FaleConoscoComponent
  ],
  imports: [
    CommonModule,
    FaleConoscoRoutingModule,
    SharedModule
  ]
})
export class FaleConoscoModule { }
