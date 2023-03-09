import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHighlight } from './directives/basic-highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { ConvertNumber } from './pipes/number.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthGuard } from './authGuard/auth-guard.service';
import { CustomIf } from './directives/custom-structural.directive';

@NgModule({
  declarations: [AppComponent, AppHighlight, ConvertNumber, CustomIf],
  imports: [BrowserModule, AppRoutingModule, MatProgressBarModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
