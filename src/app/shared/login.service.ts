import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { VisitTable } from './visit-table';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // declare variable
  forVisitTableComponent: VisitTable = new VisitTable();
  earlyUser: string = localStorage.getItem('USER');
  isLogged: boolean = this.earlyUser ? true : false;
  visitTableList: VisitTable[];
  userList: User[];

  constructor(private httpClient: HttpClient) {}

  // login
  public loginVerify(loginUser: Login) {
    console.log('Attempt authenticate and authorize');
    return this.httpClient.post(environment.apiUrl + 'api/login', loginUser);
  }

  getAllVisitTable() {
    this.httpClient
      .get(environment.apiUrl + 'api/visit')
      .toPromise()
      .then(
        (res) => {
          this.visitTableList = res as VisitTable[];
          console.log(this.visitTableList);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getAllEmployee(): void {
    this.httpClient
      .get(environment.apiUrl + 'api/users')
      .toPromise()
      .then(
        (res) => {
          this.userList = res as User[];
          console.log(this.userList);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  insertVisit(visit) {
    return this.httpClient.post(environment.apiUrl + 'api/visit', visit);
  }

  editVisit(visit) {
    return this.httpClient.put(
      environment.apiUrl + 'api/visit/' + visit.visit_id,
      visit
    );
  }
}
