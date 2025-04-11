import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeInicioRoutingModule } from './home-inicio-routing.module';
import { HomeInicioComponent } from './home-inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeInicioComponent
  ],
  imports: [
    CommonModule,
    HomeInicioRoutingModule,
    SharedModule
  ]
})
export class HomeInicioModule { }
