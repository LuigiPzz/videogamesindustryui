import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { VideogameComponent } from './videogame/videogame.component';
import { ConsoleComponent } from './console/console.component';
import { ProduttoreComponent } from './produttore/produttore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    VideogameComponent,
    ConsoleComponent,
    ProduttoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
