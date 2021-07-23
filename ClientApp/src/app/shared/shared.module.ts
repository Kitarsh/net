import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavMenuComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
