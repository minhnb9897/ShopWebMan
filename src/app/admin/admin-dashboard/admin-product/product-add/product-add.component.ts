import { Component, OnInit } from '@angular/core';
import { Category } from 'app/services/Products/category.model';
import { Product } from 'app/services/Products/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categoryList: Category[];
  products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
