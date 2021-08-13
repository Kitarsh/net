import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatorokuService } from '../chatoroku.service';
import { IArticle, IParagraph } from '../IArticles';
import { ChatorokuParagraphDialogComponent } from '../chatoroku-dialog/chatoroku-paragraph-dialog.component';
import { ChatorokuArticleDialogComponent } from '../chatoroku-dialog/chatoroku-article-dialog.component';

@Component({
  selector: 'app-chatoroku-detail',
  templateUrl: './chatoroku-detail.component.html',
  styleUrls: ['./chatoroku-detail.component.scss'],
})
export class ChatorokuDetailComponent implements OnInit, OnDestroy {
  chatorokuSubscription: Subscription;
  public article: IArticle;

  editTitle(): void {
    const dialogRef = this.dialog.open(ChatorokuArticleDialogComponent, {
      width: '300px',
      data: this.article,
    });
    dialogRef.afterClosed().subscribe((editedArticle: IArticle) => {
      this.chatorokuSrv.editChatorokuArticle(editedArticle);
    });
  }

  createParagraph(): void {
    const dialogRef = this.dialog.open(ChatorokuParagraphDialogComponent, {
      width: '300px',
      data: <IParagraph>{
        idArticle: this.article.idArticle,
        title: '',
        text: '',
        image: '',
      },
    });

    dialogRef.afterClosed().subscribe((newParagraph: IParagraph) => {
      if (!this.article.paragraphs)
      {
        this.article.paragraphs = [];
      }
      this.article.paragraphs.push(newParagraph);
      this.chatorokuSrv.createChatorokuParagraph(newParagraph);
    });
  }

  editParagraph(paragraph: IParagraph): void {
    const dialogRef = this.dialog.open(ChatorokuParagraphDialogComponent, {
      data: paragraph,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((editedParagraph: IParagraph) => {
      const paragraphIndex = this.article.paragraphs
        .findIndex(p => p.idParagraph === editedParagraph.idParagraph);
      this.article.paragraphs[paragraphIndex] = editedParagraph;
      this.chatorokuSrv.editChatorokuParagraph(editedParagraph);
    });
  }

  deleteParagraph(paragraph: IParagraph): void {
    this.chatorokuSrv.deleteChatorokuParagraph(paragraph);
    const paragraphIndex = this.article.paragraphs.findIndex(p => p.idParagraph === paragraph.idParagraph);
    this.article.paragraphs.splice(paragraphIndex, 1);
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly chatorokuSrv: ChatorokuService,
    public dialog: MatDialog) { }

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
