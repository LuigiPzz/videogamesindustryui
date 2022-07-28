import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingConsole } from '../gamingConsole/gamingConsole.component';
import { Produttore } from '../produttore/produttore.component';
import { Serie } from '../serie/serie.component';

import { Videogame } from '../videogame/videogame.component';


@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.css']
})



export class VideogameDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient) { }

  videogame : string = "";
  gamingConsole: GamingConsole = new GamingConsole(1,'Titolo', (new Produttore(1,'PC')), '2000');
  serie: Serie = new Serie(0,"Serie");
  videogameInDetails: Videogame = new Videogame(1,'Nome',false, this.gamingConsole, this.serie);
  urlVideogameImage : string = "";
  videogamesBySerieList: Videogame = new Videogame(1,'Nome',false, this.gamingConsole, this.serie);
  urlVideogamesBySerie : string = "";
  serieid : number = 1;

  ngOnInit(): void {
    this.videogame = this.route.snapshot.params['videogameid'];
    this.getDetails();
    console.log("1"+this.serieid);

  }

  getDetails() {
		this.httpClient.get<Videogame>('http://localhost:9001/api/videogames/' + this.videogame).subscribe(
			response => {
				this.videogameInDetails = response;

        this.urlVideogameImage = '../../assets/img/Videogame/'
                                  +this.videogameInDetails.console.produttore.nome.toLowerCase()+'/'
                                  + this.videogameInDetails.console.nome.toLowerCase()+'/'
                                  + this.videogameInDetails.titolo.toLowerCase().replace(':',' -')
                                  +'[FRONT].png';

                                  this.serieid=this.videogameInDetails.serie.id;
                                  console.log("1"+this.serieid);
                                  this.getVideogameSerie(this.videogameInDetails.serie.id);


			}
		);
	}

  getVideogameSerie(i : number) {
		this.httpClient.get<Videogame>('http://localhost:9001/api/videogames/serie/' + this.serieid).subscribe(
			response => {

        console.log("A---"+response);
				// this.videogamesBySerieList = response;

        // for (let i=0; i < array.length; i++) {
        //   console.log(array[i])


        // this.urlVideogamesBySerie = '../../assets/img/Videogame/'
        //                           +this.videogamesBySerieList.console.produttore.nome.toLowerCase()+'/'
        //                           + this.videogamesBySerieList.console.nome.toLowerCase()+'/'
        //                           + this.videogamesBySerieList.titolo.toLowerCase().replace(':',' -')
        //                           +'[FRONT].jpg';

        //                           console.log("ALZ"+this.urlVideogamesBySerie+ i);
			}
		);
	}



}
