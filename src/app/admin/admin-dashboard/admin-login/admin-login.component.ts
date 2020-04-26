import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/Auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginUserData = {}
  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginUserData)
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token' , res.token)
        this.router.navigate(['admin'])
      },
      err => console.log(err)
    )
  }
}
