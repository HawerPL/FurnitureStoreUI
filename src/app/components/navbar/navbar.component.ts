import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {

  isLogged: boolean = false;

  constructor(private router: Router) { }

  ngDoCheck(): void {
    if(sessionStorage.getItem("token")){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }

  }

  logout(): void {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    this.router.navigate(['home']);
  }

}
