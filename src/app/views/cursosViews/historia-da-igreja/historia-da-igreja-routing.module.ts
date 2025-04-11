import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaDaIgrejaComponent } from './historia-da-igreja.component';

const routes: Routes = [{ path: '', component: HistoriaDaIgrejaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaDaIgrejaRoutingModule { }
