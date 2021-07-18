import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [
    LinksComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LinksComponent,
  ],
})
export class LinksModule { }
