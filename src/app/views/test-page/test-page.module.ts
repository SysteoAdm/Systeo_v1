import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPageRoutingModule } from './test-page-routing.module';
import { TestPageComponent } from './test-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TestPageComponent
  ],
  imports: [
    CommonModule,
    TestPageRoutingModule,
    SharedModule
  ]
})
export class TestPageModule { }
