import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TwitchVideosService } from './twitch-videos.service';
import { ITwitchVideo, ITwitchVideoExtention } from './ITwitch-Video';

@Component({
  selector: 'app-twitch-videos',
  templateUrl: './twitch-videos.component.html',
  styleUrls: ['./twitch-videos.component.scss'],
})
export class TwitchVideosComponent implements OnInit, OnDestroy {
  subcribedTwitchVideos: Subscription;
  public textDisplay = '';
  public twitchVideos: ITwitchVideo[];

  clickOnCard(url: string): void {
    window.open(url, '_blank').focus();
  }

  constructor(private readonly twitchVideosSrv: TwitchVideosService) { }

  ngOnInit() {
    this.getTwitchVideos();
  }

  private getTwitchVideos() {
    this.subcribedTwitchVideos = this.twitchVideosSrv.getTwitchVideos().subscribe((result: string[]) => {
      const dataResult = (JSON.parse(result[0])).data as ITwitchVideo[];
      const extensions = new ITwitchVideoExtention();
      dataResult.forEach(twitchVideo => extensions.clearThumbnailUrl(twitchVideo));
      this.twitchVideos = dataResult;
    });
  }

  ngOnDestroy(): void {
    this.subcribedTwitchVideos.unsubscribe();
  }
}
