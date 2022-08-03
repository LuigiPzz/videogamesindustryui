import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogameDataService {

  videogame: any[] = [];
  videogameTitle: string = "";

  constructor(private httpClient: HttpClient) { }

  searchVideogame() {
    console.log(this.videogameTitle)

		this.httpClient.get<any>('http://localhost:8082/api/search?query='+this.videogameTitle).subscribe(
			response => {
				console.log(response);
				this.videogame = response;
			}

		);return this.videogame;
	}

}
