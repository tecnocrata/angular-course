import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UcbHighlightDirective } from './directives/ucb-highlight.directive';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';

@NgModule({
  declarations: [AppComponent, UcbHighlightDirective, AboutComponent, HomeComponent, BlogEntryComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], //
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
