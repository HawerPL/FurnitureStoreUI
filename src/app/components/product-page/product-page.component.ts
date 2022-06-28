import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/httpClient/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private http: ProductService, private route: ActivatedRoute) { }

  product: Product = {name: "" , header: "", description: "", categories: Array<Category>()};

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id: number){
    this.http.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: (e) => console.error(e)
    });
  }

}
