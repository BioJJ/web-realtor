import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateAccountComponent } from './component/create-account/create-account.component';
@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, MatFormFieldModule],
})
export class AuthModule {}
