import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'app/services/Products/product.service';
import { ProductComponent } from './admin-product/product/product.component';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  constructor(
    private modalService: NgbModal,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
  }
  
}
