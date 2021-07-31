import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [
    LinksComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
  ],
  exports: [
    LinksComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LinksModule { }
