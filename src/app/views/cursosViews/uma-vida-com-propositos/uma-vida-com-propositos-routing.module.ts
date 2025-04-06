import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UmaVidaComPropositosComponent } from './uma-vida-com-propositos.component';

const routes: Routes = [{ path: '', component: UmaVidaComPropositosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmaVidaComPropositosRoutingModule { }
