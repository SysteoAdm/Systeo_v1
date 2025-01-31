import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelulaComponent } from './celula.component';

const routes: Routes = [{ path: '', component: CelulaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelulaRoutingModule { }
