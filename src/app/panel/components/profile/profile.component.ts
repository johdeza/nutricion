import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      alert(JSON.stringify(res));
      localStorage.setItem('token', res['token']);
      localStorage.setItem('id', res['id']);
      localStorage.setItem('email', res['email']);
      this.router.navigateByUrl('/panel');
    }, (error) => {
      alert(JSON.stringify(error.error));
    })
  }
}