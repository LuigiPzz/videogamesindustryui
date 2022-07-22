import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "UtenteTest";
  password: string = "";
  autenticato: boolean = true;
  errMsg: string = "Credenziali Errate!";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId)

    if(this.userId === "Pippo" && this.password === "123"){
      this.route.navigate(['home']);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }

}
