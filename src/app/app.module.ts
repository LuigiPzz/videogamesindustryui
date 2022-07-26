import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { VideogameComponent } from './pages/videogame/videogame.component';
import { ConsoleComponent } from './pages/console/console.component';
import { ProduttoreComponent } from './pages/produttore/produttore.component';
import { VideogameDetailComponent } from './pages/videogame-detail/videogame-detail.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LogoutComponent } from './logout/logout.component';
import { VideogameCardComponent } from './components/videogame-card/videogame-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideogameComponent,
    ConsoleComponent,
    ProduttoreComponent,
    VideogameDetailComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    VideogameCardComponent
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
