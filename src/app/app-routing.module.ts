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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  // User Routes
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'users/create',
    component: CreateComponent,
  },
  {
    path: 'users/update/:id',
    component: UpdateComponent,
  },
  {
    path: 'users/delete/:id',
    component: DeleteComponent,
  },

  // Property Routes
  {
    path: 'properties',
    component: PropertyComponent,
  },
  {
    path: 'properties/create',
    component: CreateProperty,
  },
  {
    path: 'properties/update/:id',
    component: UpdateProperty,
  },
  {
    path: 'properties/delete/:id',
    component: DeleteProperty,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
