import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/httpClient/user.service';


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
  id: number = 4;

  user: User;

  hide = true;
  panelOpenState = false;

  displayedColumns: string[] = ['name', 'surname', 'email', 'token'];

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

  updateSurname(){
    let updatedUser: User;

    updatedUser = ({
      name: this.user.name,
      email: this.user.email,
      login: this.user.login,
      surname: this.updatedSurname
    })

    this.http.updateUser(updatedUser, this.id).subscribe({
      next: user => console.log(user),
      error: (e) => console.error(e)
    });

  }

  updateEmail(){
    let updatedUser: User;

    updatedUser = ({
      name: this.user.name,
      email: this.updatedEmail,
      login: this.user.login,
      surname: this.user.surname
    })

    this.http.updateUser(updatedUser, this.id).subscribe({
      next: user => console.log(user),
      error: (e) => console.error(e)
    });

  }

}