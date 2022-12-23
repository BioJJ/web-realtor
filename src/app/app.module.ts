import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// Component site
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

// View / Components User
import { UserComponent } from './views/user/user.component';
import { ListComponent } from './components/user/list/list.component';
import { CreateComponent } from './components/user/create/create.component';
import { DeleteComponent } from './components/user/delete/delete.component';
import { UpdateComponent } from './components/user/update/update.component';

// Module
import { AuthModule } from './auth/auth.module' 
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// View / Components Property
import { PropertyComponent } from './views/property/property.component';
import { ListComponent as ListProperty } from './components/property/list/list.component';
import { CreateComponent as CreateProperty } from './components/property/create/create.component';
import { DeleteComponent as DeleteProperty } from './components/property/delete/delete.component';
import { UpdateComponent as UpdateProperty } from './components/property/update/update.component';

// View / Components Purchase
import { PurchaseComponent } from './views/purchase/purchase.component';
import { ListComponent as ListPurchase } from './components/purchase/list/list.component';
import { CreateComponent as CreatePurchase } from './components/purchase/create/create.component';
import { DeleteComponent as DeletePurchase } from './components/purchase/delete/delete.component';
import { UpdateComponent as UpdatePurchase } from './components/purchase/update/update.component';

import { httpInterceptorProviders } from './interceptors';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UserComponent,
    ListComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    PropertyComponent,
    ListProperty,
    CreateProperty,
    DeleteProperty,
    UpdateProperty,
    PurchaseComponent,
    ListPurchase,
    CreatePurchase,
    DeletePurchase,
    UpdatePurchase,
  ],
  imports: [
    AuthModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
