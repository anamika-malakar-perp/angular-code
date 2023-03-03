import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHighlight } from './directives/basic-highlight.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AppHighlight],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
