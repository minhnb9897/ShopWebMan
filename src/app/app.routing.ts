import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './client/home/landing.component';
import { AdminLoginComponent } from './admin/admin-dashboard/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductAddComponent } from './admin/admin-dashboard/admin-product/product-add/product-add.component';
import { ProductEditComponent } from './admin/admin-dashboard/admin-product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './admin/admin-dashboard/admin-product/product-details/product-details.component';
import { ProductListComponent } from './admin/admin-dashboard/admin-product/product-list/product-list.component';


const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' }, 
    { path: 'landing',          component: LandingComponent },
    //admin router
    { path: 'admin/login',     component: AdminLoginComponent , data: { title: 'Đăng nhập Hydra Admin' }},
    { path: 'admin',     component: ProductListComponent , data: { title: 'Hydra quản lý' }},
    { path: 'admin/create', component: ProductAddComponent , data: {title: 'Tạo mới sản phẩm'}},
    { path: 'admin/edit/:id', component: ProductEditComponent , data: {title:'Sửa sản phẩm'}},
    { path: 'admin/details/:id', component: ProductDetailsComponent , data: {title: 'Chi tiết sản phẩm'}}
    
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
