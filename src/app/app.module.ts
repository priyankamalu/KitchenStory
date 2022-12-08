import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecepyComponent } from './recepy/recepy.component';
import { RecepyListComponent } from './recepy/recepy-list/recepy-list.component';
import { RecepyItemComponent } from './recepy/recepy-list/recepy-item/recepy-item.component';
import { RecepyDetailComponent } from './recepy/recepy-detail/recepy-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';

import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecepyComponent,
    RecepyListComponent,
    RecepyItemComponent,
    RecepyDetailComponent,
    ShoppingListComponent,
    LoginComponent,
    DisplayComponent,
    InsertComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
