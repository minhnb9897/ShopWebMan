import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Product } from 'app/services/Products/product.model';
import { ProductService } from 'app/services/Products/product.service';
import { SortEvent , NgbdSortableHeader} from 'app/services/Products/sortable.directive';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from '../product-add/product-add.component';
import { Category } from 'app/services/Products/category.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
  providers: [ DecimalPipe , ProductService]
})
export class ProductListComponent {
  products : Observable<Product[]>
  categories : Observable<Category[]>
  total$: Observable<number>
  closeResult = '';
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  
  constructor(
    public productService : ProductService,
    private modalService: NgbModal,
   
  ) {
    this.products = productService.products$;
    this.total$ = productService.total$;
    this.categories = productService.categories$
   }

  ngOnInit(): void {
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.productService.sortColumn = column;
    this.productService.sortDirection = direction;
  }

  AddProduct() {
    this.modalService.open(ProductAddComponent, {size: 'lg' , centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
