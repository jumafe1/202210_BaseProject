import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillasListComponent } from './maravillas-list/maravillas-list.component';
import { MaravillasDetailComponent } from './maravillas-detail/maravillas-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaravillasListComponent, MaravillasDetailComponent],
  exports: [MaravillasListComponent]
})
export class MaravillasModule { }
