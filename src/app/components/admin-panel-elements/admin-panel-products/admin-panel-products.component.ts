import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/Product';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator} from '@angular/material/paginator';

const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Szafka', header: "Szafka", description: "", categories: []},
  {id: 2, name: 'Stolik nocny', header: "Stolik nocny", description: "", categories: []},
  {id: 3, name: 'Półka', header: "Półka", description: "Półka 30x30, idealna do powieszenia na ścianie", categories: []},
  {id: 4, name: 'Stolik', header: "Stolik", description: "", categories: []}
];


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
export class AdminPanelProductsComponent implements AfterViewInit {

  displayedColumns = ["id", "name", "header"];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
  expandedElement: Product | null | undefined;

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
