import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginComponent],
  providers: [],
})
export class AuthModule {}
