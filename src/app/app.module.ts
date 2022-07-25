import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { VideogameComponent } from './videogame/videogame.component';
import { ConsoleComponent } from './console/console.component';
import { ProduttoreComponent } from './produttore/produttore.component';
import { VideogameDetailComponent } from './videogame-detail/videogame-detail.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    VideogameComponent,
    ConsoleComponent,
    ProduttoreComponent,
    VideogameDetailComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CoreModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
