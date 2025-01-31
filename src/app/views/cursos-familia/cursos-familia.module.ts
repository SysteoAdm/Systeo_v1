import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosFamiliaRoutingModule } from './cursos-familia-routing.module';
import { CursosFamiliaComponent } from './cursos-familia.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CursosFamiliaComponent
  ],
  imports: [
    CommonModule,
    CursosFamiliaRoutingModule,
    SharedModule
  ]
})
export class CursosFamiliaModule { }
