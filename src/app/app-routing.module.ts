import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { VideogameComponent } from './videogame/videogame.component';
import { ConsoleComponent } from './console/console.component';
import { ProduttoreComponent } from './produttore/produttore.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuardServiceService } from 'src/services/route-guard-service.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
	{path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
	{path: 'friend', component: FriendComponent},
	{path: 'videogame', component: VideogameComponent, canActivate:[RouteGuardServiceService]},
	{path: 'console', component: ConsoleComponent, canActivate:[RouteGuardServiceService]},
	{path: 'produttore', component: ProduttoreComponent, canActivate:[RouteGuardServiceService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
