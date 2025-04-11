import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VidaEObraDoApostoloPauloComponent } from './vida-e-obra-do-apostolo-paulo.component';

const routes: Routes = [{ path: '', component: VidaEObraDoApostoloPauloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VidaEObraDoApostoloPauloRoutingModule { }
