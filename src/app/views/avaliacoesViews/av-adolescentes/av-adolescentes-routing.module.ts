import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AVAdolescentesComponent } from './av-adolescentes.component';

const routes: Routes = [{ path: '', component: AVAdolescentesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AVAdolescentesRoutingModule { }
