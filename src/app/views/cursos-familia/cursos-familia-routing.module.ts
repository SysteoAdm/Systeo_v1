import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFamiliaComponent } from './cursos-familia.component';

const routes: Routes = [{ path: '', component: CursosFamiliaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosFamiliaRoutingModule { }
