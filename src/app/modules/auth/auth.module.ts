import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomNgIf } from '../../directives/custom-structural.directive';
import { OnHoverColor } from '../../directives/hover-color.directive';
import { MyToggleDirective } from '../../directives/toggle.directive';
import { ToolTip } from '../../directives/tooltip.directive';
import { TempaeratureConversion } from '../../pipes/temprature-conversion.pipe';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { UserData } from './components/user-data/user-data.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  declarations: [LoginComponent, UserData, CustomNgIf, OnHoverColor, MyToggleDirective, ToolTip, TempaeratureConversion],
  providers: [],
})
export class AuthModule {}
