import { Component, EventEmitter, Output } from '@angular/core';
import { User } from "./user/user";
import { DUMMY_USERS } from '../dummy-data/dummy-users';

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  @Output() userSelected = new EventEmitter<string>();
  users = DUMMY_USERS;

  onUserSelected(selectedUserId: string) {
    this.userSelected.emit(selectedUserId);
  }
}
