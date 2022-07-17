import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/httpClient/category.service';

@Component({
  selector: 'app-admin-panel-edit-category',
  templateUrl: './admin-panel-edit-category.component.html',
  styleUrls: ['./admin-panel-edit-category.component.css']
})
export class AdminPanelEditCategoryComponent implements OnInit {

  notifier: NotifierService;
  categoryName: string = "";

  constructor(private fb: FormBuilder, private http: CategoryService, private notifierService: NotifierService,
    public dialogRef: MatDialogRef<AdminPanelEditCategoryComponent>, @Inject(MAT_DIALOG_DATA) public category: Category) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.categoryName = this.category.name;
  }

  categoryForm = this.fb.group({
    name: [null, Validators.required]
  })

  editCategory(){
    let category: Category;
    category = ({
      id: this.category.id,
      name: this.categoryName
    })
    this.http.addCategory(category).subscribe(
      {
      next: () => {
        this.categoryForm.reset();
        this.notifier.notify('success', "Pomyślnie zaktualizowano kategorię");
      },
      error: (e) => {
        console.error(e);
        this.notifier.notify('error', "Wystąpił błąd: " + e);
      }
  })
  this.dialogRef.close();
  }
}
