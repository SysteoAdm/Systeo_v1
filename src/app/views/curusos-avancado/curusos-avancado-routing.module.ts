import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurusosAvancadoComponent } from './curusos-avancado.component';

const routes: Routes = [{ path: '', component: CurusosAvancadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurusosAvancadoRoutingModule { }
