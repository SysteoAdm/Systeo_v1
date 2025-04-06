import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VidaEObraDoApostoloPauloRoutingModule } from './vida-e-obra-do-apostolo-paulo-routing.module';
import { VidaEObraDoApostoloPauloComponent } from './vida-e-obra-do-apostolo-paulo.component';


@NgModule({
  declarations: [
    VidaEObraDoApostoloPauloComponent
  ],
  imports: [
    CommonModule,
    VidaEObraDoApostoloPauloRoutingModule
  ]
})
export class VidaEObraDoApostoloPauloModule { }
