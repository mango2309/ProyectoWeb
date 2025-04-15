import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { RegisterUserComponent } from './users/register/register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'admin/categorias',
    component: CategoryListComponent
  },
  {
    path: 'admin/categorias/agregar',
    component: AddCategoryComponent
  },
  {
    path: 'admin/categorias/:id',
    component: EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
