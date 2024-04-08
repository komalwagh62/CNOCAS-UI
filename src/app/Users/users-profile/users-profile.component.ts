
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.scss'
})
export class UsersProfileComponent implements OnInit {
  switchState: boolean = false;

  toggleSwitch() {
    this.switchState = !this.switchState;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}