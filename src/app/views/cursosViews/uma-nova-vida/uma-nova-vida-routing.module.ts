import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UmaNovaVidaComponent } from './uma-nova-vida.component';

const routes: Routes = [{ path: '', component: UmaNovaVidaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmaNovaVidaRoutingModule { }
