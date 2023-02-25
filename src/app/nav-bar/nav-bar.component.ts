import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string | null;

  constructor() { }

  ngOnInit(): void {
  }

  onLoggedIn(){
    this.loggedinUser = localStorage.getItem('token')
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token')
    alertify.success("You are successfully Logged out..!!")
  }
}
