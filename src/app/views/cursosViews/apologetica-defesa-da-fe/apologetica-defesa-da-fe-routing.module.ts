import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApologeticaDefesaDaFeComponent } from './apologetica-defesa-da-fe.component';

const routes: Routes = [{ path: '', component: ApologeticaDefesaDaFeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApologeticaDefesaDaFeRoutingModule { }
