import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { CreateComponent } from './components/user/create/create.component'
import { DeleteComponent } from './components/user/delete/delete.component';
import { UpdateComponent } from './components/user/update/update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UserComponent
  },
  {
    path: "users/create",
    component: CreateComponent
  },
  {
    path: "users/update/:id",
    component: UpdateComponent
  },
  {
    path: "users/delete/:id",
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
