import { UserService } from './../users/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // inputs: ['user:user-data'], // Alternativa per @input
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user; // user-data è un alias
  @Output('onDeleteUser') userDeleted = new EventEmitter(); // Evento di cancellazione

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userDeleted.emit(this.user); // Emissione Evento
    // this.userService.deleteUsers(this.user);
  }

}