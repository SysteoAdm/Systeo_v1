import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ADoutrinaDoEspiritoSantoRoutingModule } from './a-doutrina-do-espirito-santo-routing.module';
import { ADoutrinaDoEspiritoSantoComponent } from './a-doutrina-do-espirito-santo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ADoutrinaDoEspiritoSantoComponent
  ],
  imports: [
    CommonModule,
    ADoutrinaDoEspiritoSantoRoutingModule,
    SharedModule
  ]
})
export class ADoutrinaDoEspiritoSantoModule { }
