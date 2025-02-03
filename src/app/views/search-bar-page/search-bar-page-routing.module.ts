import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarPageComponent } from './search-bar-page.component';


const routes: Routes = [{ path: '', component: SearchBarPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBarPageRoutingModule { }
