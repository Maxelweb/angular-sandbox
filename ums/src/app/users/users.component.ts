import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
    selector: "app-users",
    // DA USARE INLINE: template: "<h2>Users</h2>"
    templateUrl: "users.component.html",
    styleUrls: ["users.component.css"]
})

export class UsersComponent implements OnInit {

    title: "Users";
    users: User[] = [];
    constructor(private service: UserService) {
    }

    ngOnInit() {
        this.users = this.service.getUsers();
    }
    onDeleteUser(user) {
        this.service.deleteUsers(user);
    }
}