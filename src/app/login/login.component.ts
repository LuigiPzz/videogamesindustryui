import { Component, OnInit } from '@angular/core';
import { AuthappService } from 'src/services/authapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Pippo";
  password: string = "123";
  autenticato: boolean = true;
  errMsg: string = "Credenziali Errate!";

  constructor(
      private route: Router,
      private BasicAuth: AuthappService
    ) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId)

    if(this.BasicAuth.autentica(this.userId, this.password)){
      this.route.navigate(['home']);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }


  }

}
