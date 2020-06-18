import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = new User('', '', '', '', '');

  id: number;

  constructor(private route: ActivatedRoute, private service: UserService, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getUser(id).subscribe(data => (this.user = data));
  }

  onSubmit() {
    this.service.editUser( this.user).subscribe(data => (
      this.router.navigate(['/users'])
    ));
  }

}
