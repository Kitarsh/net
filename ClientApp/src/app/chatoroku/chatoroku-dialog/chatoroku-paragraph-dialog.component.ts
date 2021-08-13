import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IParagraph } from '../IArticles';

@Component({
    selector: 'app-chatoroku-paragraph-dialog',
    templateUrl: 'chatoroku-paragraph-dialog.component.html',
})
export class ChatorokuParagraphDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ChatorokuParagraphDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IParagraph) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}