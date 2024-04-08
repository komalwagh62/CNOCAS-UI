import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrl: './users-register.component.scss'
})
export class UsersRegisterComponent {

  SignupForm: FormGroup | any;
  otpSent: boolean = false;
  constructor(private router: Router) { }
  public showPassword: boolean = false;
  generatedOTP: string | undefined;
  ngOnInit(): void {
    this.SignupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]),
      phone_number: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[6789]\d{9}$/)]),
      password: new FormControl('', [Validators.required, Validators.nullValidator]),
      otp: new FormControl('', [Validators.required, Validators.nullValidator, Validators.pattern(/^\d{4}$/)]),
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  generateOTP() {
    // Generate a random 4-digit OTP
    this.generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    // You can implement OTP sending logic here, like sending an SMS to the entered phone number

    alert(this.generatedOTP);
  }

  regenerateOtp() {
    const phoneNumberControl = this.SignupForm.get('phone_number');
    if (phoneNumberControl && phoneNumberControl.valid) {
      this.generateOTP();
      this.otpSent = true;
    } else {
      this.otpSent = false;
    }
  }
  onPhoneNumberChange() {
    const phoneNumberControl = this.SignupForm.get('phone_number');
    if (phoneNumberControl && phoneNumberControl.valid) {
      this.generateOTP();
      this.otpSent = true;
    } else {
      this.otpSent = false;
    }
  }

  onsubmit() {
    const { email, password } = this.SignupForm.value;

  }
}