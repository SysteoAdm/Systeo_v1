import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhasAvalicacoesComponent } from './minhas-avalicacoes.component';

const routes: Routes = [{ path: '', component: MinhasAvalicacoesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhasAvalicacoesRoutingModule { }
