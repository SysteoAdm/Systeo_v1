import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { VideoPlayerComponent } from './video-player.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
    SharedModule
  ]
})
export class VideoPlayerModule { }
