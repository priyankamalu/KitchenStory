import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecepyComponent } from './recepy/recepy.component';

import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'order-list',component:ShoppingListComponent},
  {path:'login',component:LoginComponent},
  {path:'display',component:DisplayComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'insert',component:InsertComponent},
  {path:'recepy',component:RecepyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
