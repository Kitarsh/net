import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { TwitchVideosComponent } from './twitch-videos.component';

@NgModule({
  declarations: [
    TwitchVideosComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'twitch-videos', component: TwitchVideosComponent },
    ]),
    MaterialModule,
  ],
})
export class TwitchVideosModule { }
