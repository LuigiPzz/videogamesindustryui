import { Component, OnInit } from '@angular/core';

export class Serie {
  constructor(
    public id: number,
    public nome: string
  ){
  }
}

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
