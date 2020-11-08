import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private autService: AuthService) { }

  ngOnInit(): void {
  }

logout(){
  this.autService.logout().subscribe(res => {
    alert(JSON.stringify(res));
  }, error => {
    alert(JSON.stringify(error.error));
  })
}
}