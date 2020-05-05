import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable()
export class UserService {

    users: Array<User> =  [ // o anche User[]
        {
            id: 1,
            name: "Mario",
            lastname: "Rossi",
            email: "mariorossi@email.it",
            fiscalcode: "F192393FF83493",
            province: "PD",
            phone: 13939404
        },
        {
            id: 2,
            name: "Mario2",
            lastname: "Rossi2",
            email: "mariorossi2@email.it",
            fiscalcode: "C192393FF83493",
            province: "PD",
            phone: 13939404
        },
        {
            id: 3,
            name: "Mario3",
            lastname: "Rossi3",
            email: "mariorossi3@email.it",
            fiscalcode: "A192393FF83493",
            province: "VE",
            phone: 13939404
        },
        {
            id: 4,
            name: "Mario4",
            lastname: "Rossi4",
            email: "mariorossi4@email.it",
            fiscalcode: "B192393FF83493",
            province: "PD",
            phone: 13939404
        },
    ];

    getUsers() {
        return this.users;
    }

    deleteUsers(user) {
        let index = this.users.indexOf(user);
        if(index >= 0){
            this.users.splice(index, 1);
        }
    }

    updateUser(user: UserInterface) {
        const index = this.users.findIndex((v) => v.id === user.id);
        //alert(index);
        if(index !== -1){
            this.users[index] = user; 
        }
    }

    createUser(user: UserInterface) {
        this.users.splice(0, 0, user);
    }
}