import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Users } from "./users/users";

@Component({
  selector: 'app-root',
  imports: [Header, Users],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  selectedUserId: string | undefined;

  onUserSelected(userId: string){
    if(this.selectedUserId === userId)
      this.selectedUserId = undefined;
    else
      this.selectedUserId = userId;
  }
}
