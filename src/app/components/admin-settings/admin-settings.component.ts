import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/httpClient/user.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminSettingsComponent implements OnInit {

  displayedColumns = ["id", "login", "name", "surname", "email", "actions"];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource<User>();
  expandedElement: User | null | undefined;

  hide = true;
  
  userLogin: string = "";
  userName: string = "";
  userSurname: string = "";
  userEmail: string = "";
  userToken: string = "";

  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnInit(): void {
    this.getUsers();
    this.dataSource.paginator = this.paginator;
  }

  constructor(private fb: FormBuilder, private httpUser: UserService, private router: Router) { }

  userForm = this.fb.group({
    login: [null, Validators.required],
    name: [null, Validators.required],
    surname: [null, Validators.required],
    email: [null, Validators.required],
    token: [null, Validators.required],
  })

  getUsers(){
    this.httpUser.getUsers().subscribe(users => {
      this.reloadData(users);
    });
  }

  addUser(){
    let user: User;
    user = ({
      login: this.userLogin,
      name: this.userName,
      surname: this.userSurname,
      email: this.userEmail,
      token: this.userToken
    })
    this.httpUser.addUser(user).subscribe(
      {
      next: () => {
        this.getUsers();
        this.userForm.reset();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  deleteUser(id: number){
    this.httpUser.deleteUser(id).subscribe(
      {
        next: () => {
          this.getUsers();
        },
        error: (e) => console.error(e),
      }
    )
  }

  editUser(id: number){
    alert("Akcja nie zaimplemetowana")
  }

  reloadData(users: Array<User>){
    this.dataSource.data = users;
    this.dataSource.paginator = this.paginator;
  }


}
