
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersEditUpdateComponent } from '../users-edit-update/users-edit-update.component';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.scss'
})
export class UsersProfileComponent implements OnInit {
  switchState: boolean = false;
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(UsersEditUpdateComponent);
  }
  toggleSwitch() {
    this.switchState = !this.switchState;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}