import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChatorokuListComponent } from './chatoroku-list/chatoroku-list.component';
import { ChatorokuDetailComponent } from './chatoroku-detail/chatoroku-detail.component';
import { MaterialModule } from '../shared/material.module';
import { ChatorokuParagraphDialogComponent } from './chatoroku-dialog/chatoroku-paragraph-dialog.component';
import { ChatorokuArticleDialogComponent } from './chatoroku-dialog/chatoroku-article-dialog.component';

@NgModule({
  declarations: [
    ChatorokuListComponent,
    ChatorokuDetailComponent,
    ChatorokuParagraphDialogComponent,
    ChatorokuArticleDialogComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'chatoroku-articles', component: ChatorokuListComponent },
      { path: 'chatoroku-articles/:id', component: ChatorokuDetailComponent },
    ]),
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatorokuModule { }
