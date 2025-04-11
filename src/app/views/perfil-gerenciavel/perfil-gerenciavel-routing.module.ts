import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilGerenciavelComponent } from './perfil-gerenciavel.component';

const routes: Routes = [{ path: '', component: PerfilGerenciavelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilGerenciavelRoutingModule { }
