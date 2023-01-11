import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.scss'],
})
export class CreateVisitComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    if (!this.loginService.isLogged) {
      location.href = 'login';
    }
  }
}
