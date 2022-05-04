import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {

  isLogged: boolean = false;

  constructor() { }

  ngDoCheck(): void {
    if(sessionStorage.getItem("isLogged")){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }

  }

}
