import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatorokuService } from '../chatoroku.service';
import { IArticle } from '../IArticles';

@Component({
  selector: 'app-chatoroku-detail',
  templateUrl: './chatoroku-detail.component.html',
  styleUrls: ['./chatoroku-detail.component.scss'],
})
export class ChatorokuDetailComponent implements OnInit, OnDestroy {
  chatorokuSubscription: Subscription;
  public article: IArticle;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly chatorokuSrv: ChatorokuService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chatorokuSubscription = this.chatorokuSrv.getChatorokuArticle(id).subscribe((result: IArticle[]) => {
      this.article = result[0];
    });
  }

  ngOnDestroy(): void {
    this.chatorokuSubscription.unsubscribe();
  }
}
