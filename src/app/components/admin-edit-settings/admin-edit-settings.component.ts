import { StickyDirection } from '@angular/cdk/table';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/httpClient/user.service';

@Component({
  selector: 'app-admin-edit-settings',
  templateUrl: './admin-edit-settings.component.html',
  styleUrls: ['./admin-edit-settings.component.css']
})
export class AdminEditSettingsComponent implements OnInit {

  notifier: NotifierService;
  userLogin: string = "";
  userName: string = "";
  userSurname: string = "";
  userEmail: string = "";
  
  constructor(private fb: FormBuilder,
    private httpUser: UserService,
    private notifierService: NotifierService,
    public dialogRef: MatDialogRef<AdminEditSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User) { 
    this.notifier = notifierService;
    }

  userForm = this.fb.group({
    login: [null, Validators.required],
    name: [null, Validators.required],
    surname: [null, Validators.required],
    email: [null, Validators.required],
  })
    
  ngOnInit(): void {
    this.userLogin = this.user.login;
    this.userName = this.user.name;
    this.userSurname = this.user.surname;
    this.userEmail = this.user.email;
  }

  editUser(){
    let user: User;
    user = ({
      id: this.user.id,
      login: this.user.login,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      password: this.user.password,
    })
    this.httpUser.addUser(user).subscribe(
      {
        next: () => {
          this.userForm.reset();
          this.notifier.notify('success', "Pomyślnie zaktualizowano produkt");
        },
        error: (e) => {
          console.error(e);
          this.notifier.notify('error', "Wystąpił błąd: " + e);
        },
      })
    this.dialogRef.close();
  }
}
