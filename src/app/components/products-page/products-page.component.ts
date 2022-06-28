import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/httpClient/category.service';
import { ProductService } from 'src/app/services/httpClient/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  constructor(private httpCategory: CategoryService, private httpProduct: ProductService, private router: Router) { }

  allProducts: Array<Product>;
  visibleProducts: Array<Product>;
  categories: Array<Category>;
  selectedCategories: Array<Category> = [];

  async ngOnInit(): Promise<void> {
    await this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.httpProduct.getProducts().subscribe({
      next: products => { this.allProducts = products},
      error: () => {/* called when there are errors */},
      complete: () => { this.visibleProducts = this.allProducts}
  })

  }

  getCategories(){
    this.httpCategory.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  reloadData(){
    let temp = Array<Product>();
    this.visibleProducts.forEach((p, index) => {
        p.categories.forEach(c =>{
          for(let sC of this.selectedCategories){

            if(sC.id === c.id){
              temp.push(p);
              break;
            }
          }
        })
    })

    temp = temp.filter((el, i, a) => i === a.indexOf(el))
    this.visibleProducts = temp;
    temp = [];
  }

  viewProduct(id: number){
    this.router.navigate(['product', id]);
  }

  select(item: MatChip, category: Category): void {
    item.selected = !item.selected;
    if(item.selected){
      this.selectedCategories.push(category);
      this.reloadData();
    } else {
      let temp: Array<Category> = [];
      this.selectedCategories.forEach((c, index) => {
        if(c.id == category.id){}
        else{
          temp.push(c);
        }
        this.selectedCategories = temp;
      })
      temp = [];
      this.visibleProducts = this.allProducts;
      this.reloadData();
      }

      //Jeśli żadne pole nie jest zaznaczone pokaż wszystkie produkty
      if(this.selectedCategories.length == 0){
        this.visibleProducts = this.allProducts;
      }

  }
}
