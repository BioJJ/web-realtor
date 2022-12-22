import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { ListComponent } from './components/user/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from  '@angular/material/card';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { UserComponent } from './views/user/user.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';

import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    UsersModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
