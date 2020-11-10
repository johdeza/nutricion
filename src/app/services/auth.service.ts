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
    return this.http.put(`${this.apiUrl}logout/${id}`, {}, this.headers());
  }

  headers() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": `${this.leerToken()}`
    });
    return { headers: headers };
  }
  
  leerToken() {
    console.log(localStorage.getItem("x-access-token"));
    return localStorage.getItem("x-access-token");
  }

}