import { UserService } from '../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';
import { Router } from '@angular/router';

@Component({
  // inputs: ['user:user-data'], // Alternativa per @input
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user : User; // user-data è un alias
  @Output('onDeleteUser') userDeleted = new EventEmitter(); // Evento di cancellazione
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userDeleted.emit(this.user); // Emissione Evento
    // this.userService.deleteUsers(this.user);
  }

  updateUser(){
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);
  }

  showUserDetail() {
    this.route.navigate(['users', this.user.id]);
  }

}
