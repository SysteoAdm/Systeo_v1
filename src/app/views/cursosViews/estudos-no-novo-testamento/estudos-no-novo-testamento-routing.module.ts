import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudosNoNovoTestamentoComponent } from './estudos-no-novo-testamento.component';

const routes: Routes = [{ path: '', component: EstudosNoNovoTestamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudosNoNovoTestamentoRoutingModule { }
