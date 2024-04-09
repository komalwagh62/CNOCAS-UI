import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-edit-update',
  templateUrl: './users-edit-update.component.html',
  styleUrl: './users-edit-update.component.scss'
})
export class UsersEditUpdateComponent {
  Editform: FormGroup | any;

  // constructor(private dialogref: MatDialogRef<UsersEditUpdateComponent>,) { }


  ngOnInit(): void {
    this.Editform = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [Validators.required,]),
    });

  }

  adddetail() {
    // console.log(this.Editform.value)
   
  }
}