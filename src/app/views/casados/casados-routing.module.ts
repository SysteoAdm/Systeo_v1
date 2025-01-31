import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasadosComponent } from './casados.component';

const routes: Routes = [{ path: '', component: CasadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasadosRoutingModule { }
