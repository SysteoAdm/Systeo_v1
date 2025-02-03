import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarPageRoutingModule } from './search-bar-page-routing.module';
import { SearchBarPageComponent } from './search-bar-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SearchBarPageComponent
  ],
  imports: [
    CommonModule,
    SearchBarPageRoutingModule,
    SharedModule
  ]
})
export class SearchBarPageModule { }
