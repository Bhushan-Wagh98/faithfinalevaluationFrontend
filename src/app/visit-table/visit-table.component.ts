import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { VisitTable } from '../shared/visit-table';

@Component({
  selector: 'app-visit-table',
  templateUrl: './visit-table.component.html',
  styleUrls: ['./visit-table.component.scss'],
})
export class VisitTableComponent implements OnInit {
  page: number = 1;
  filterString: string;

  isLoggedIn: boolean = localStorage.getItem('USER') ? true : false;
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    if (!this.loginService.isLogged) {
      location.href = 'login';
    }

    this.getAllVisit();
  }

  getAllVisit() {
    this.loginService.getAllVisitTable();
  }

  updateVisit(form: VisitTable) {
    console.log(form);
  }

  deleteVisit(visitID: number) {
    console.log(visitID);
  }
}
