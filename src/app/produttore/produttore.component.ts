import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Produttore {
	constructor(
		public id: number,
		public nome: string
	) {
	}
}

@Component({
	selector: 'app-produttore',
	templateUrl: './produttore.component.html',
	styleUrls: ['./produttore.component.css']
})

export class ProduttoreComponent implements OnInit {

	produttore: any[] = [];
	
	constructor(private httpClient: HttpClient) {

	}
	ngOnInit(): void {
		this.getProduttore()
	}

	getProduttore() {
		this.httpClient.get<any>('http://localhost:8082/api/produttore').subscribe(
			response => {
				console.log(response);
				this.produttore = response;
			}
		);
	}
}
