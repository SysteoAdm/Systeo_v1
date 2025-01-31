import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaBiblicaComponent } from './escola-biblica.component';

const routes: Routes = [{ path: '', component: EscolaBiblicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaBiblicaRoutingModule { }
