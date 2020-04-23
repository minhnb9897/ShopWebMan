import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/Products/product.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
  
  }


  

}
