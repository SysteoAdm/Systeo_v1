import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodaABibliaEmUmAnoComponent } from './toda-a-biblia-em-um-ano.component';

const routes: Routes = [{ path: '', component: TodaABibliaEmUmAnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodaABibliaEmUmAnoRoutingModule { }
