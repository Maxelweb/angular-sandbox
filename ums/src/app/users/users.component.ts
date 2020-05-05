import { UserService } from '../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';

@Component({
    selector: "app-users",
    // DA USARE INLINE: template: "<h2>Users</h2>"
    templateUrl: "users.component.html",
    styleUrls: ["users.component.css"]
})

export class UsersComponent implements OnInit {

    title: "Users";
    users: User[] = [];

    @Output() updateUser = new EventEmitter();

    constructor(private service: UserService) {
    }

    ngOnInit() {
        this.users = this.service.getUsers();
    }
    onDeleteUser(user: User) {
        this.service.deleteUsers(user);
    }
    onSelectUser(user: User){
        // this.updateUser.emit(user);
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy);
    }
}