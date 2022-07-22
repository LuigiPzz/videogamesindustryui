import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Videogame {
	constructor(
		public id: number,
		public titolo: string,
		public posseduto: boolean,
		public console: Console,
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

	constructor(private httpClient: HttpClient) {

	}

	ngOnInit(): void {
		this.getVideogame()
	}



	getVideogame() {

		this.httpClient.get<any>('http://localhost:8082/api/videogames').subscribe(
			response => {
				console.log(response);
				this.videogame = response;
			}
		);


	}

}