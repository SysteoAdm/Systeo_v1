import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarNovoUsuarioComponent } from './criar-novo-usuario.component';

const routes: Routes = [{ path: '', component: CriarNovoUsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriarNovoUsuarioRoutingModule { }
