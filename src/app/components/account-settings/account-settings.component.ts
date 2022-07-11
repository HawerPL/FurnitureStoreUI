import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/httpClient/user.service';

const ELEMENT_DATA_USER: User[] = [
  {id: 1, name: 'Dominik', surname: 'Radziszewski', email: 'test123@gmail.com', login: 'ASD', token: '1234'},
];

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  updatedName: string = '';
  updatedSurname: string = '';
  updatedEmail: string = '';
  updatedToken: string = '';
  id: number = 1;

  user: User;

  hide = true;
  panelOpenState = false;

  displayedColumns: string[] = ['name', 'surname', 'email', 'token'];
  dataSourceUser = new MatTableDataSource<User>(ELEMENT_DATA_USER);

  accountForm = this.fb.group({
    name: [null, Validators.required],
    surname: [null, Validators.required],
    email: [null, Validators.required],
    token: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router: Router, private http: UserService) { }

  ngOnInit(): void {
    this.http.getUser(this.id).subscribe({
      next: user => {
        this.user = user;
      }
    })
  }

  updateName(){
    let updatedUser: User;

    updatedUser = ({
      name: this.updatedName,
      email: this.user.email,
      login: this.user.login,
      surname: this.user.surname
    })

    this.http.updateUser(updatedUser, this.id).subscribe({
      next: user => console.log(user),
      error: (e) => console.error(e)
    });

  }

}
