import { Injectable, PipeTransform } from '@angular/core';
import { Product } from './product.model';
import { SortColumn, SortDirection } from './sortable.directive';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { DecimalPipe } from '@angular/common';
import {debounceTime, delay, switchMap, tap, catchError} from 'rxjs/operators';
import { PRODUCTS } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderItem } from '../Orders/order-item.model';
import { ToastrService } from 'ngx-toastr';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
interface SearchResult {
  products: Product[];
  total: number;
}
interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(products: Product[], column: SortColumn, direction: string): Product[] {
  if (direction === '' || column === '') {
    return products;
  } else {
    return [...products].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(products: Product, term: string, pipe: PipeTransform) {
  return products.Name.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(products.Price).includes(term)
    || pipe.transform(products.Code).includes(term);
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _products$ = new BehaviorSubject<Product[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  productForm: Product;
  orderItems: OrderItem[];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  constructor(
    private pipe: DecimalPipe,
    private http : HttpClient,
    private toastr : ToastrService
    ) { 
      // tìm kiếm sản phẩm
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._products$.next(result.products);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get products$() { return this._products$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let products = sort(PRODUCTS, sortColumn, sortDirection);

    // 2. filter
    products = products.filter(country => matches(country, searchTerm, this.pipe));
    const total = products.length;

    // 3. paginate
    products = products.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({products, total});
  }
  // end tìm kiếm sản phẩm 

  // thêm sản phẩm 

  addProduct(productForm : Product) {
    console.log(productForm);
    return this.http.post('', productForm, httpOptions).pipe(
      tap((newProduct : Product) => this.log(`Thêm mới hàng hóa w/ id=${newProduct.ProductID}`)),
      catchError(this.handleError<Product>('Thêm mới hàng hóa'))
    )
  }

  private log(message: string) {
    this.toastr.success(`Product Service : ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
