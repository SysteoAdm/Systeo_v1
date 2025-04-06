import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesDaFeCristaComponent } from './bases-da-fe-crista.component';

const routes: Routes = [{ path: '', component: BasesDaFeCristaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasesDaFeCristaRoutingModule { }
