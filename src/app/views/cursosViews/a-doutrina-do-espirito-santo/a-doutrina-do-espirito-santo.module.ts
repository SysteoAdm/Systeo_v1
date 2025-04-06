import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ADoutrinaDoEspiritoSantoRoutingModule } from './a-doutrina-do-espirito-santo-routing.module';
import { ADoutrinaDoEspiritoSantoComponent } from './a-doutrina-do-espirito-santo.component';


@NgModule({
  declarations: [
    ADoutrinaDoEspiritoSantoComponent
  ],
  imports: [
    CommonModule,
    ADoutrinaDoEspiritoSantoRoutingModule
  ]
})
export class ADoutrinaDoEspiritoSantoModule { }
