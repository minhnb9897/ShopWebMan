import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProductListComponent } from './admin-product/product-list/product-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminSlideBarComponent } from './admin-slide-bar/admin-slide-bar.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from 'app/services/Products/sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ProductAddComponent } from './admin-product/product-add/product-add.component';
import { ProductDetailsComponent } from './admin-product/product-details/product-details.component';
import { ProductEditComponent } from './admin-product/product-edit/product-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AdminDashboardComponent,     
      ProductListComponent,
       AdminLoginComponent,
        AdminMainComponent,
         AdminSlideBarComponent,
         NgbdSortableHeader,
         AdminProductComponent,
         ProductAddComponent,
         ProductDetailsComponent,
         ProductEditComponent,
        ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule, 
  ],
  exports: [AdminDashboardComponent , CommonModule]  
})
export class AdminDashboardModule { }
