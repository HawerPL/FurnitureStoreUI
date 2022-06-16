import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/httpClient/category.service';

@Component({
  selector: 'app-admin-panel-categories',
  templateUrl: './admin-panel-categories.component.html',
  styleUrls: ['./admin-panel-categories.component.css']
})

export class AdminPanelCategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  displayedFormColumns: string[] = ['id-add', 'name-add'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource<Category>();

  categoryName: string = "";

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private http: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.dataSource.paginator = this.paginator;
  }

  categoryForm = this.fb.group({
    name: [null, Validators.required]
  })

  getCategories(){
    this.http.getCategories().subscribe(categories => {
      this.reloadData(categories);
    });
  }

  addCategory(){
    let category: Category;
    category = ({
      name: this.categoryName
    })
    this.http.addCategory(category).subscribe(
      {
      next: () => {
        this.getCategories();
        this.categoryForm.reset();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }

  deleteCategory(id: number){
    this.http.deleteCategory(id).subscribe(
      {
        next: () => {
          this.getCategories();
        },
        error: (e) => console.error(e),
      }
    )
  }

  editCategory(id: number){
    alert("Akcja nie zaimplemetowana")
  }

  reloadData(categories: Array<Category>){
    this.dataSource.data = categories;
    this.dataSource.paginator = this.paginator;
  }



}
