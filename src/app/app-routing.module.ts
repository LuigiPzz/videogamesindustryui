import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { VideogameComponent } from './pages/videogame/videogame.component';
import { GamingConsoleComponent } from './pages/gamingConsole/gamingConsole.component';
import { ProduttoreComponent } from './pages/produttore/produttore.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuardServiceService } from 'src/services/route-guard-service.service';
import { VideogameCardComponent } from './components/videogame-card/videogame-card.component';
import { VideogameDetailComponent } from './pages/videogame-detail/videogame-detail.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
	{path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
	{path: 'videogame', component: VideogameComponent, canActivate:[RouteGuardServiceService]},
	{path: 'videogame/details/:videogameid', component: VideogameDetailComponent, canActivate:[RouteGuardServiceService]},
	{path: 'console', component: GamingConsoleComponent, canActivate:[RouteGuardServiceService]},
	{path: 'produttore', component: ProduttoreComponent, canActivate:[RouteGuardServiceService]},
	{path: 'videogame/card', component: VideogameCardComponent, canActivate:[RouteGuardServiceService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
