import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/Products/product.service';
import {NgForm} from '@angular/forms';
import { Category } from 'app/services/Products/category.model';
import { Product } from 'app/services/Products/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  categoryList: Category[];
  products: Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
  
  }


  

}
