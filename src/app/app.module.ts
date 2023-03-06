import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHighlight } from './directives/basic-highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { ConvertNumber } from './pipes/number.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppScrollProgress } from './directives/app-scroll-progress.directive';

@NgModule({
  declarations: [AppComponent, AppHighlight, ConvertNumber, AppScrollProgress],
  imports: [BrowserModule, AppRoutingModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
