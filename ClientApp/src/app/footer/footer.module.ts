import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LinksModule } from '../links/links.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    SharedModule,
    LinksModule,
    MaterialModule,
  ],
  exports: [
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterModule { }
