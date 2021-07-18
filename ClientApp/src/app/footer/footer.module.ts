import { NgModule } from '@angular/core';
import { LinksModule } from '../links/links.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    SharedModule,
    LinksModule,
  ],
  exports: [
    FooterComponent,
  ],
})
export class FooterModule { }
