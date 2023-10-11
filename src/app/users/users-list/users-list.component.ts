import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users:User[] = []

  constructor(private service:UserService) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.service.getUsers().subscribe(
      (res) => this.users = res.results
    )
  }
}
