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
import { NotifierService } from 'angular-notifier';
import { AdminPanelEditProductComponent } from '../admin-panel-edit-product/admin-panel-edit-product.component';
import { MatDialog } from '@angular/material/dialog';

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

  notifier: NotifierService;

  productName: string = "";
  imageName: string = "";
  productDescription: string = "";
  productHeader: string = "";
  productCategories: Array<Category> = [];
  fileBase64;
  srcResult;


  categoriesList: Array<Category> = [];

  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.dataSource.paginator = this.paginator;
  }

  constructor(private fb: FormBuilder,
    private notifierService: NotifierService,
    private httpProduct: ProductService,
    private httpCategory: CategoryService,
    private router: Router,
    public dialog: MatDialog) {
      this.notifier = notifierService;
  }

  productForm = this.fb.group({
    name: [null, Validators.required],
    header: [null, Validators.required],
    description: [null, Validators.required],
    categories: [null]
  })

  getProducts(){
    this.httpProduct.getProducts().subscribe({
      next: products => {
        this.reloadData(products);
      },
      error: (e) => {
        console.error(e);
        this.notifier.notify('error', "Nie udało błąd, nie udało się pobrać produktów: " + e);
      }
    });
  }

  getCategories(){
    this.httpCategory.getCategories().subscribe({
      next: categories => {
        this.categoriesList = categories;
      },
      error: (e) => {
        console.error(e);
        this.notifier.notify('error', "Nie udało błąd, nie udało się pobrać kategorii: " + e);
      }
    })
  }

  addProduct(){
    let product: Product;
    product = ({
      name: this.productName,
      description: this.productDescription,
      header: this.productHeader,
      categories: this.productCategories,
      image: this.fileBase64
    })
    this.httpProduct.addProduct(product).subscribe(
      {
      next: () => {
        this.getProducts();
        this.productForm.reset();
        this.notifier.notify('success', "Pomyślnie dodano produkt");
      },
      error: (e) => {
        console.error(e);
        this.notifier.notify('error', "Wystąpił błąd: " + e);
      },
    })
  }

  deleteProduct(id: number){
    this.httpProduct.deleteProduct(id).subscribe(
      {
        next: () => {
          this.getProducts();
          this.notifier.notify('success', "Pomyślnie usunięto produkt");
        },
        error: (e) => {
          console.error(e);
          this.notifier.notify('error', "Wystąpił błąd: " + e);
        }
      }
    )
  }

  editProduct(product: Product){
    const dialogRef = this.dialog.open(AdminPanelEditProductComponent, {
      data: product
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getProducts();
    })
  }

  viewProduct(id: number){
    this.router.navigate(['product', id]);
  }

  reloadData(products: Array<Product>){
    this.dataSource.data = products;
    this.dataSource.paginator = this.paginator;
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      this.imageName = inputNode.files[0].name;
      this.getBase64(inputNode.files[0]).then(
        data => { this.fileBase64 = data }
      );
    }
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

}
