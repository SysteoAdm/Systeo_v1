import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdolescentesComponent } from './adolescentes.component';

const routes: Routes = [{ path: '', component: AdolescentesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdolescentesRoutingModule { }
