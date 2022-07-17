import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/httpClient/category.service';
import { ProductService } from 'src/app/services/httpClient/product.service';

@Component({
  selector: 'app-admin-panel-edit-product',
  templateUrl: './admin-panel-edit-product.component.html',
  styleUrls: ['./admin-panel-edit-product.component.css']
})
export class AdminPanelEditProductComponent implements OnInit {

  notifier: NotifierService;
  productName: string = "";
  productImage: string = "";
  imageName: string = "";
  productDescription: string = "";
  productHeader: string = "";
  productCategories: Array<Category> = [];
  categoriesList: Array<Category> = [];
  fileBase64;
  srcResult;


  constructor(private fb: FormBuilder,
    private httpProduct: ProductService,
    private httpCategory: CategoryService,
    private notifierService: NotifierService,
    public dialogRef: MatDialogRef<AdminPanelEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product) {
    this.notifier = notifierService;
  }

  productForm = this.fb.group({
    name: [null, Validators.required],
    header: [null, Validators.required],
    description: [null, Validators.required],
    categories: [null]
  })

  ngOnInit(): void {
    this.getCategories();
    this.productName = this.product.name;
    this.productDescription = this.product.description;
    this.productHeader = this.product.header;
    this.productCategories = this.product.categories;
    this.fileBase64 = this.product.image;
  }

  editProduct(){
    let product: Product;
    product = ({
      id: this.product.id,
      name: this.productName,
      description: this.productDescription,
      header: this.productHeader,
      categories: this.productCategories,
      image: this.fileBase64
    })
    this.httpProduct.addProduct(product).subscribe(
      {
      next: () => {
        this.productForm.reset();
        this.notifier.notify('success', "Pomyślnie zaktualizowano produkt");
      },
      error: (e) => {
        console.error(e);
        this.notifier.notify('error', "Wystąpił błąd: " + e);
      },
  })
  this.dialogRef.close();
  }

  getCategories(){
    this.httpCategory.getCategories().subscribe({
      next: categories => {
        this.categoriesList = categories;
      },
      error: (e) => console.error(e)
    })
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('.edit-image-button #file');

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
