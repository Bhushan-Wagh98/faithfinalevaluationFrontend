import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isloggedIn: boolean = localStorage.getItem('USER') ? true : false;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  logoutFn() {
    localStorage.removeItem('USER');
    location.href = 'login';
  }
}
