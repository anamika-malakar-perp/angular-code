import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { UserData } from './components/user-data/user-data.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginComponent, UserData],
  providers: [],
})
export class AuthModule {}
