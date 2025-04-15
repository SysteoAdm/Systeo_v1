import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreDoutrinaRoutingModule } from './pre-doutrina-routing.module';
import { PreDoutrinaComponent } from './pre-doutrina.component';


@NgModule({
  declarations: [
    PreDoutrinaComponent
  ],
  imports: [
    CommonModule,
    PreDoutrinaRoutingModule
  ]
})
export class PreDoutrinaModule { }
