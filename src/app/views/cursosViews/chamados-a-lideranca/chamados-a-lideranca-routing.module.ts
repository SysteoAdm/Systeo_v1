import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosALiderancaComponent } from './chamados-a-lideranca.component';

const routes: Routes = [{ path: '', component: ChamadosALiderancaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosALiderancaRoutingModule { }
