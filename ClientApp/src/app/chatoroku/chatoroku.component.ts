import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatorokuService } from './chatoroku.service';
import { IArticle } from './IArticles';

@Component({
  selector: 'app-chatoroku',
  templateUrl: './chatoroku.component.html',
  styleUrls: ['./chatoroku.component.css']
})
export class ChatorokuComponent implements OnInit, OnDestroy {
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

  // addArticle(articles: IArticle[]) {

  //   const article: IArticle = {
  //     title: 'Rocket League',
  //     paragraphs: [
  //       {
  //         image: null,
  //         title: 'This is Rocket League!',
  //         text: 'Amazing first paragraph',
  //       },
  //       {
  //         image: null,
  //         title: 'This is Rocket League!',
  //         text: 'Normal second paragraph',
  //       },
  //     ],
  //   };
  //   articles.push(article);
  // }
}
