import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];

  columsToDisplay = ['id', 'name', 'phone number', 'email', 'address', 'type', 'edit', 'delete'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.get().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe();
    window.location.reload();
  }

}
