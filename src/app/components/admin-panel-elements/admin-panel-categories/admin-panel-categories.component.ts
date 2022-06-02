import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: Category[] = [
  {id: 1, name: 'Łazienka'},
  {id: 2, name: 'Salon'},
  {id: 3, name: 'Pokój dziecięcy'},
  {id: 4, name: 'Kuchnia'}
];

@Component({
  selector: 'app-admin-panel-categories',
  templateUrl: './admin-panel-categories.component.html',
  styleUrls: ['./admin-panel-categories.component.css']
})

export class AdminPanelCategoriesComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name'];
  displayedFormColumns: string[] = ['id-add', 'name-add'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);

  @ViewChild('paginator') paginator!: MatPaginator;

  categoryForm = this.fb.group({
    name: [null, Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
