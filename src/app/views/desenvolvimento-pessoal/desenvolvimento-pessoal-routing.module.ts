import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesenvolvimentoPessoalComponent } from './desenvolvimento-pessoal.component';

const routes: Routes = [{ path: '', component: DesenvolvimentoPessoalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesenvolvimentoPessoalRoutingModule { }
