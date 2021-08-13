import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { ChatorokuService } from '.././chatoroku.service';
import { IArticle } from '.././IArticles';
import { ChatorokuArticleDialogComponent } from '../chatoroku-dialog/chatoroku-article-dialog.component';

@Component({
  templateUrl: './chatoroku-list.component.html',
  styleUrls: ['./chatoroku-list.component.scss'],
})
export class ChatorokuListComponent implements OnInit, OnDestroy {
  subscribedChatoroku: Subscription;
  public articles: IArticle[];

  createNewArticle() {
    const dialogRef = this.dialog.open(ChatorokuArticleDialogComponent, {
      width: '300px',
      data: <IArticle>{
        title: '',
        paragraphs: [],
      },
    });
    dialogRef.afterClosed().subscribe((editedArticle: IArticle) => {
      const observable = this.chatorokuSrv.createChartorokuArticle(editedArticle);
      observable.subscribe((article: IArticle) => {
        this.articles.push(article);
      });
    });
  }

  ngOnInit() {
    this.subscribedChatoroku = this.chatorokuSrv.getChatorokuArticles().subscribe((result: IArticle[]) => {
      this.articles = result;
    });
  }

  constructor(
    private readonly chatorokuSrv: ChatorokuService,
    public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscribedChatoroku.unsubscribe();
  }
}
