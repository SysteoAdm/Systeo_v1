import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaisComponent } from './casais.component';

const routes: Routes = [{ path: '', component: CasaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasaisRoutingModule { }
