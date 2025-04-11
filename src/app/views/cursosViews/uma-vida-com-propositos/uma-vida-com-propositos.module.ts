import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmaVidaComPropositosRoutingModule } from './uma-vida-com-propositos-routing.module';
import { UmaVidaComPropositosComponent } from './uma-vida-com-propositos.component';


@NgModule({
  declarations: [
    UmaVidaComPropositosComponent
  ],
  imports: [
    CommonModule,
    UmaVidaComPropositosRoutingModule
  ]
})
export class UmaVidaComPropositosModule { }
