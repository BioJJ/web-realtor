import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { CreateComponent } from './components/user/create/create.component';
import { DeleteComponent } from './components/user/delete/delete.component';
import { UpdateComponent } from './components/user/update/update.component';
import { PropertyComponent } from './views/property/property.component';
import { CreateComponent as CreateProperty } from './components/property/create/create.component';
import { DeleteComponent as DeleteProperty } from './components/property/delete/delete.component';
import { UpdateComponent as UpdateProperty } from './components/property/update/update.component';
import { PurchaseComponent } from './views/purchase/purchase.component';
import { CreateComponent as CreatePurchase } from './components/purchase/create/create.component';
import { DeleteComponent as DeletePurchase } from './components/purchase/delete/delete.component';
import { UpdateComponent as UpdatePurchase } from './components/purchase/update/update.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { ManageComponent } from './components/purchase/manage/manage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN,USER'
    }
  },

  // User Routes
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN,USER'
    }
  },
  {
    path: 'users/create',
    component: CreateComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },
  {
    path: 'users/update/:id',
    component: UpdateComponent,
  },
  {
    path: 'users/delete/:id',
    component: DeleteComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },

  // Property Routes
  {
    path: 'properties',
    component: PropertyComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN,USER'
    }
  },
  {
    path: 'properties/create',
    component: CreateProperty,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN,USER'
    }
  },
  {
    path: 'properties/update/:id',
    component: UpdateProperty,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },
  {
    path: 'properties/delete/:id',
    component: DeleteProperty,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },

  // Purchase Routes
  {
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN,USER'
    }
  },
  {
    path: 'purchase/create',
    component: CreatePurchase,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN,USER'
    }
  },
  {
    path: 'purchase/manage/:id',
    component: ManageComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },
  {
    path: 'purchase/update/:id',
    component: UpdatePurchase,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },
  {
    path: 'purchase/delete/:id',
    component: DeletePurchase,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
