import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogame } from '../videogame/videogame.component';

//  export class VideogameRef{
//   constructor(
//     public nomeProduttore: string,
//     public nomeConsole: string
//   ){

//   }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  maxNumberResult : number = 18;
  lastVideogamesAddedlist : any = [];
  // nomeProduttore = '';
  // nomeConsole='';
  videogameRef : any = [];
  nomeProduttore : String = '';
  nomeConsole : String = '';


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.lastVideogamesAdded();
  }

  lastVideogamesAdded(){
    this.httpClient.get<Videogame>('http://localhost:9001/api/videogames/lastVideogamesAdded?limit='+this.maxNumberResult).subscribe(
			response => {

        this.lastVideogamesAddedlist = response
        for(let element in response){
          this.videogameRef.nomeProduttore =  this.lastVideogamesAddedlist[element].console.produttore.nome.toLowerCase( );
          this.nomeConsole = this.lastVideogamesAddedlist[element].console.nome.toLowerCase( );
          console.log(this.nomeProduttore);
          console.log("----");
          console.log(this.nomeConsole);

        }

			}
		);
  }
}
