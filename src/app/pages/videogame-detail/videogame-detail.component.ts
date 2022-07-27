import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingConsole } from '../gamingConsole/gamingConsole.component';
import { Produttore } from '../produttore/produttore.component';

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
  gamingConsole: GamingConsole = new GamingConsole(1,'a', (new Produttore(1,'prod')), '2000');
  videogameInDetails: Videogame = new Videogame(1,'a',false, this.gamingConsole, '2000');


  ngOnInit(): void {
    this.videogame = this.route.snapshot.params['videogameid'];
    this.getDetails();
  }

  getDetails() {
		this.httpClient.get<Videogame>('http://localhost:9001/api/videogames/' + this.videogame).subscribe(
			response => {
				this.videogameInDetails = response;
			}
		);
	}

}
