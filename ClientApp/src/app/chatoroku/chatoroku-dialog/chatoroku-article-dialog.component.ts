import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IParagraph } from '../IArticles';

@Component({
    selector: 'app-chatoroku-article-dialog',
    templateUrl: 'chatoroku-article-dialog.component.html',
})
export class ChatorokuArticleDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ChatorokuArticleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IParagraph) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}