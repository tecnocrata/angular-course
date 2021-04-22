import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UcbHighlightDirective } from './directives/ucb-highlight.directive';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogEntryEditComponent } from './components/blog-entry-edit/blog-entry-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UcbHighlightDirective,
    AboutComponent,
    HomeComponent,
    BlogEntryComponent,
    BlogEntryEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule], //
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
