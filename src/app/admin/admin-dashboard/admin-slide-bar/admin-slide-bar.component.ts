import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/Auth/auth.service';

@Component({
  selector: 'app-admin-slide-bar',
  templateUrl: './admin-slide-bar.component.html',
  styleUrls: ['./admin-slide-bar.component.css']
})
export class AdminSlideBarComponent implements OnInit {
  

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
   
  }

}
