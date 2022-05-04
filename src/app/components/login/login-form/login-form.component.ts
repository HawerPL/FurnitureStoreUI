import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit(): void {
    sessionStorage.setItem("isLogged", "true");
    this.router.navigate(['adminPanel']);
  }
}
