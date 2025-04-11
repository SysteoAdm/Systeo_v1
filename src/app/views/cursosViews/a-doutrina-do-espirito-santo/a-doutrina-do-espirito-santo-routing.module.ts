import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADoutrinaDoEspiritoSantoComponent } from './a-doutrina-do-espirito-santo.component';

const routes: Routes = [{ path: '', component: ADoutrinaDoEspiritoSantoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADoutrinaDoEspiritoSantoRoutingModule { }
