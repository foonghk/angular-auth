import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/auth/';

let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

const httpOptions = {
  headers: headers,
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
  
};

// let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     //headers.append('X-CSRF-Token', token.token);
//let options = new RequestOptions({ headers: headers });
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password,
    }, httpOptions);
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      email,
      password
    }, httpOptions);
  }

}
