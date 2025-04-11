import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrandoAVidaFinanceiraComponent } from './administrando-a-vida-financeira.component';

const routes: Routes = [{ path: '', component: AdministrandoAVidaFinanceiraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrandoAVidaFinanceiraRoutingModule { }
