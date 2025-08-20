import { Component, computed, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  user = input<User1>();
  userAvatar = computed(() => "assets/images/users/" + this.user()!.avatar);

  @Output() userSelected = new EventEmitter<string>();

  onClick() {
    this.userSelected.emit(this.user()!.id);
  }
}