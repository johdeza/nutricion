import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(body) {
    return this.http.post(`${this.apiUrl}login`,body)
  }

  logout(){
    let accessToken = localStorage.getItem("token");
    //let id = localStorage.getItem("id");
    //return this.http.put(`${this.apiUrl}logout/${id}`,
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    this.router.navigateByUrl('/');
  }
  

}
