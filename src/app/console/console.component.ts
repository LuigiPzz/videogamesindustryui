import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Console {
	constructor(
		public id: number,
		public nome: string,
		public produttore: string, //todo
		public anno: string
	) {
	}
}

@Component({
	selector: 'app-console',
	templateUrl: './console.component.html',
	styleUrls: ['./console.component.css']
})

export class ConsoleComponent implements OnInit {

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
