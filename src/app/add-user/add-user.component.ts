import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User('', '', '', '', '');

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  public addUser() {
    this.userService.save(this.user).subscribe((data: any[]) => {
      this.user = data;
    });
  }
}
