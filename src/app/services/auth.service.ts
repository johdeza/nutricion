import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(body) {
    return this.http.post(`${this.apiUrl}login`, body)
  }


  logout() {
    let id = localStorage.getItem("id");
    return this.http.put(`${this.apiUrl}logout/${id}`, {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem("x-access-token"))     
    });
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    this.router.navigateByUrl('/');
  }


}