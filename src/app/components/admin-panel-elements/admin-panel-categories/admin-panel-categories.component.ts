import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotifierService } from 'angular-notifier';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/httpClient/category.service';
import { AdminPanelEditCategoryComponent } from '../admin-panel-edit-category/admin-panel-edit-category.component';

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
  notifier: NotifierService;

  categoryName: string = "";


  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private notifierService: NotifierService, private http: CategoryService, public dialog: MatDialog) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getCategories();
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
        this.notifier.notify('success', "Pomyślnie dodano kategorię");
      },
      error: (e) => {
        console.error(e);
        this.notifier.notify('error', "Wystąpił błąd: " + e);
      }
  })
  }

  deleteCategory(id: number){
    this.http.deleteCategory(id).subscribe(
      {
        next: () => {
          this.getCategories();
          this.notifier.notify('success', "Pomyślnie usunięto kategorię");
        },
        error: (e) => {
          console.error(e);
          this.notifier.notify('error', "Wystąpił błąd: " + e);
        }
      }
    )
  }

  editCategory(category: Category){
    const dialogRef = this.dialog.open(AdminPanelEditCategoryComponent, {
      data: category
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getCategories();
    })
  }

  reloadData(categories: Array<Category>){
    this.dataSource.data = categories;
    this.dataSource.paginator = this.paginator;
  }



}
