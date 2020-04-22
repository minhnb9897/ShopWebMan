import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './examples/profile/profile.component';

import { LandingComponent } from './examples/landing/landing.component';
import { AdminLoginComponent } from './admin/admin-dashboard/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';


const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },    
    { path: 'user-profile',     component: ProfileComponent },    
    { path: 'landing',          component: LandingComponent },
    { path: 'admin/signup',     component: AdminLoginComponent },
    { path: 'admin',     component: AdminDashboardComponent },
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
