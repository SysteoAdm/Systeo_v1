import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DozePassosALuzDasEscriturasComponent } from './doze-passos-a-luz-das-escrituras.component';

const routes: Routes = [{ path: '', component: DozePassosALuzDasEscriturasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DozePassosALuzDasEscriturasRoutingModule { }
