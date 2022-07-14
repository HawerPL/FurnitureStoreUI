import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string;
  password: string;
  invalidLogin = false;
  notifier: NotifierService;

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router: Router, private http: AuthenticationService, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  onSubmit(): void {

    this.http.authenticate(this.username, this.password).subscribe({
      next: data => {
        this.router.navigate(['adminPanel']);
        this.invalidLogin = false;
      },
      error: (e) => {
        console.log(e);
        this.showNotification('error', "Nie znaleziono użytkownika");
        this.invalidLogin = true;
      }
    })
  }
}
