import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class Friend {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public department: string,
    public email: string,
    public country: string
  ) {
  }
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})

export class FriendComponent implements OnInit {

  friend: Friend[] = [];

  constructor(private httpClient: HttpClient) { 
  	
  }

  ngOnInit(): void {
  	this.getFriend()
  }
  
  getFriend(){
  
  this.httpClient.get<any>('http://localhost:8082/api/videogames').subscribe(
    response => {
      console.log(response);
      this.friend = response;
    }
  );
}

}
