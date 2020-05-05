import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  userService: UserService;

  constructor(userService: UserService) { 
    this.userService = userService; 
  }

  ngOnInit(): void {
  }

  saveUser() {
    if(this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
  }
}
