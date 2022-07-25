import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { VideogameComponent } from './videogame/videogame.component';
import { ConsoleComponent } from './console/console.component';
import { ProduttoreComponent } from './produttore/produttore.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
	{path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
	{path: 'friend', component: FriendComponent},
	{path: 'videogame', component: VideogameComponent},
	{path: 'console', component: ConsoleComponent},
	{path: 'component', component: HomeComponent},
	{path: 'produttore', component: ProduttoreComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
