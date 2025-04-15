import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreDoutrinaComponent } from './pre-doutrina.component';

const routes: Routes = [{ path: '', component: PreDoutrinaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreDoutrinaRoutingModule { }
