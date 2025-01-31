import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacaoLideresComponent } from './formacao-lideres.component';

const routes: Routes = [{ path: '', component: FormacaoLideresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormacaoLideresRoutingModule { }
