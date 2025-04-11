import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DozePassosALuzDasEscriturasRoutingModule } from './doze-passos-a-luz-das-escrituras-routing.module';
import { DozePassosALuzDasEscriturasComponent } from './doze-passos-a-luz-das-escrituras.component';


@NgModule({
  declarations: [
    DozePassosALuzDasEscriturasComponent
  ],
  imports: [
    CommonModule,
    DozePassosALuzDasEscriturasRoutingModule
  ]
})
export class DozePassosALuzDasEscriturasModule { }
