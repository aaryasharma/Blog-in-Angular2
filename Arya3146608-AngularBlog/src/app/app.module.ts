import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from "@angular/router";
import{FormsModule} from "@angular/forms";
import{HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PostsComponent } from './posts/posts.component';
import { AddComponent } from './add/add.component';
import {BlogService} from "./blog.service";
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterComponent } from './filter/filter.component';
import { RatingsComponent } from './ratings/ratings.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    PostsComponent,
    AddComponent,
    WelcomeComponent,
    FilterComponent,
    RatingsComponent,
    EditComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'update',component:UpdateComponent},
      {path:'update/:id',component:UpdateComponent},
      {path:'add',component:AddComponent},
      {path:'filter',component:FilterComponent},
      {path:'favourites',component:FavouritesComponent},
      {path:'edit',component:EditComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}


    ]),
    FormsModule,
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
