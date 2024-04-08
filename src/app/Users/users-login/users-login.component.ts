import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrl: './users-login.component.scss'
})
export class UsersLoginComponent {
 
  LogInForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private router: Router) { }
  public showPassword: boolean = false;

  ngOnInit(): void {
    this.LogInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]),
      password: new FormControl('', [Validators.required, Validators.nullValidator])
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }




  onsubmit() {
    const { email, password } = this.LogInForm.value;
   
  }
}