import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLiderancaComponent } from './pre-lideranca.component';

const routes: Routes = [{ path: '', component: PreLiderancaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreLiderancaRoutingModule { }
