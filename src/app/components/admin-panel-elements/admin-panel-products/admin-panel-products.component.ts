import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/Product';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator} from '@angular/material/paginator';
import { ProductService } from 'src/app/services/httpClient/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/httpClient/category.service';

@Component({
  selector: 'app-admin-panel-products',
  templateUrl: './admin-panel-products.component.html',
  styleUrls: ['./admin-panel-products.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminPanelProductsComponent implements OnInit {

  displayedColumns = ["id", "name", "header", "category", "actions"];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource<Product>();
  expandedElement: Product | null | undefined;

  productName: string = "";
  productDescription: string = "";
  productHeader: string = "";
  productCategories: Array<Category> = [];

  categoriesList: Array<Category> = [];

  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.dataSource.paginator = this.paginator;
  }

  constructor(private fb: FormBuilder, private httpProduct: ProductService, private httpCategory: CategoryService, private router: Router) { }

  productForm = this.fb.group({
    name: [null, Validators.required],
    header: [null, Validators.required],
    description: [null, Validators.required],
    categories: [null]
  })

  getProducts(){
    this.httpProduct.getProducts().subscribe(products => {
      this.reloadData(products);
    });
  }

  getCategories(){
    this.httpCategory.getCategories().subscribe({
      next: categories => {
        this.categoriesList = categories;
      },
      error: (e) => console.error(e)
    })
  }

  addProduct(){
    let product: Product;
    product = ({
      name: this.productName,
      description: this.productDescription,
      header: this.productHeader,
      categories: this.productCategories
    })
    this.httpProduct.addProduct(product).subscribe(
      {
      next: () => {
        this.getProducts();
        this.productForm.reset();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  deleteProduct(id: number){
    this.httpProduct.deleteProduct(id).subscribe(
      {
        next: () => {
          this.getProducts();
        },
        error: (e) => console.error(e),
      }
    )
  }

  editProduct(id: number){
    alert("Akcja nie zaimplemetowana")
  }

  viewProduct(id: number){
    this.router.navigate(['product', id]);
  }

  reloadData(products: Array<Product>){
    this.dataSource.data = products;
    this.dataSource.paginator = this.paginator;
  }




}
