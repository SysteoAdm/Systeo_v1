import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudosNoAntigoTestamentoComponent } from './estudos-no-antigo-testamento.component';

const routes: Routes = [{ path: '', component: EstudosNoAntigoTestamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudosNoAntigoTestamentoRoutingModule { }
