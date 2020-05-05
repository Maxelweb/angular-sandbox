import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-users",
    // DA USARE INLINE: template: "<h2>Users</h2>"
    templateUrl: "users.component.html",
    styleUrls: ["users.component.css"]
})

export class UsersComponent implements OnInit {

    title: "Users";
    users = [];
    constructor(private service: UserService) {
    }

    ngOnInit() {
        this.users = this.service.getUsers();
    }
}