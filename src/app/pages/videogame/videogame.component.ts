import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GamingConsole } from '../gamingConsole/gamingConsole.component';

export class Videogame {
	constructor(
		public id: number,
		public titolo: string,
		public posseduto: boolean,
		public console: GamingConsole,
		public serie: string
	) {
	}
}

@Component({
	selector: 'app-videogame',
	templateUrl: './videogame.component.html',
	styleUrls: ['./videogame.component.css']
})

export class VideogameComponent implements OnInit {


	videogame: any[] = [];
  videogameTitle: string = "";




	constructor(private httpClient: HttpClient,
                    private route: Router,
                    private aroute: ActivatedRoute
                    ) {

	}

	ngOnInit(): void {
		this.searchVideogame();
    this.videogameTitle = this.aroute.snapshot.params['videgameByTitle'];
	}

	searchVideogame() {
    console.log(this.videogameTitle)

		this.httpClient.get<any>('http://localhost:8082/api/search?query='+this.videogameTitle).subscribe(
			response => {
				console.log(response);
				this.videogame = response;
			}
		);
	}

  goToDetails(videogameid: number){
    this.route.navigate(['videogame/details',videogameid]);
  }

}
