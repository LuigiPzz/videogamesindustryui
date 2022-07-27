import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produttore } from '../produttore/produttore.component';

export class GamingConsole {
	constructor(
		public id: number,
		public nome: string,
		public produttore: Produttore, //todo
		public anno: string
	) {
	}
}

@Component({
	selector: 'app-console',
	templateUrl: './gamingConsole.component.html',
	styleUrls: ['./gamingConsole.component.css']
})

export class GamingConsoleComponent implements OnInit {

	console: any[] = [];

	constructor(private httpClient: HttpClient) {

	}

	ngOnInit(): void {
		this.getConsole()
	}

	getConsole() {

		this.httpClient.get<any>('http://localhost:8082/api/consoles').subscribe(
			response => {
				console.log(response);
				this.console = response;
			}
		);


	}
}
