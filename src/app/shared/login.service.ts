import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // declare variable

  earlyUser: string = localStorage.getItem('USER');
  isLogged: boolean = this.earlyUser ? true : false;

  constructor(private httpClient: HttpClient) {}

  // validate username and password for authorization and authentication
  // authorize return token with role and password
  public loginVerify(loginUser: Login) {
    // calling RESTAPI by emailId and password
    console.log('Attempt authenticate and authorize');
    return this.httpClient.post(environment.apiUrl + 'api/login', loginUser);
  }

  // Update NEWS PublicWebAPI: http://localhost:9091/api/publicapi
  getPublicAPI(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'api/publicapi');
  }

  // Confidential report: http://localhost:9091/api/confidential
  getConfidentialReport(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'api/confidential');
  }

  // logout
  public logOut(): void {
    localStorage.removeItem('USERNAME');
    sessionStorage.removeItem('USERNAME');
    localStorage.removeItem('ACCESS_ROLE');
    localStorage.removeItem('JWT_TOKEN');
  }
}
