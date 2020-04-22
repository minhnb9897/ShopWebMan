import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProductComponent } from './admin-product/product/product.component';
import { ProductListComponent } from './admin-product/product-list/product-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminSlideBarComponent } from './admin-slide-bar/admin-slide-bar.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminDashboardComponent, ProductComponent, ProductListComponent, AdminLoginComponent, AdminMainComponent, AdminSlideBarComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ]
})
export class AdminDashboardModule { }
