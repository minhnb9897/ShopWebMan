import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'app/services/Products/product.service';
import { Product } from 'app/services/Products/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product ={
    ProductID: null,
    Code: '',
    Name: '',
    CategoryID: null,
    Price: null,
    OnHand: null,
    Description: '',
    IsActive: true,
    Image: ''
  };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductDetails(this.route.snapshot.params.id);
  }

  // lấy Details của sản phẩm
  getProductDetails(id: string) {
    this.productService.getProductById(id)
      .subscribe((data: any) => {
        this.product = data;
        console.log(this.product);
        this.isLoadingResults = false;
      });
  }

  deleteProduct(id: any) {
    this.isLoadingResults = true;
    this.productService.deleteProduct(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/admin']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }


}
