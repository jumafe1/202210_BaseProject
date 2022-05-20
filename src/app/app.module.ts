import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaravillasListComponent } from './maravillas-list/maravillas-list.component';
import { MaravillasDetailComponent } from './maravillas-detail/maravillas-detail.component';

@NgModule({
  declarations: [		
    AppComponent,
      MaravillasListComponent,
      MaravillasDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
