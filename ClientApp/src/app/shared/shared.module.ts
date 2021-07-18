import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavMenuComponent,
  ]
})
export class SharedModule { }
