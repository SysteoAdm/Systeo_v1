import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConhecendoDeusEFazendoSuaVontadeComponent } from './conhecendo-deus-e-fazendo-sua-vontade.component';

const routes: Routes = [{ path: '', component: ConhecendoDeusEFazendoSuaVontadeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConhecendoDeusEFazendoSuaVontadeRoutingModule { }
