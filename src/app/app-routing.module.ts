import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FriendComponent} from './friend/friend.component';
import {VideogameComponent} from './videogame/videogame.component';
import {ConsoleComponent} from './console/console.component';
import {ProduttoreComponent} from './produttore/produttore.component';


const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'friend', component: FriendComponent},
	{path: 'videogame', component: VideogameComponent},
	{path: 'console', component: ConsoleComponent},
	{path: 'component', component: HomeComponent},
	{path: 'produttore', component: ProduttoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
