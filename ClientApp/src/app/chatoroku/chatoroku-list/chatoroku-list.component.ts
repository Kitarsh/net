import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatorokuService } from '.././chatoroku.service';
import { IArticle } from '.././IArticles';

@Component({
  templateUrl: './chatoroku-list.component.html',
  styleUrls: ['./chatoroku-list.component.css']
})
export class ChatorokuListComponent implements OnInit, OnDestroy {
  subscribedChatoroku: Subscription;
  public articles: IArticle[];

  ngOnInit() {
    this.subscribedChatoroku = this.chatorokuSrv.getChatorokuArticles().subscribe((result: IArticle[]) => {
      this.articles = result;
    });
  }

  constructor(private readonly chatorokuSrv: ChatorokuService) { }

  ngOnDestroy(): void {
    this.subscribedChatoroku.unsubscribe();
  }
}
