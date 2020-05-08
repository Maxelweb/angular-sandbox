import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    private APIURL = 'http://localhost:8000/users'

    constructor(private http: HttpClient){

    }

    users: Array<User> =  [ ];

    getUsers() {
        return this.http.get(this.APIURL);
    }

    getUser(id: number){
        return this.http.get(this.APIURL + '/' + id);
    }

    deleteUsers(user) {
        let index = this.users.indexOf(user);
        if(index >= 0){
            this.users.splice(index, 1);
        }
    }

    updateUser(user: UserInterface) {
        user['_method'] = 'PUT';
        return this.http.post(this.APIURL + '/' + user.id, user);
    }

    createUser(user: UserInterface) {
        return this.http.post(this.APIURL, user);
    }
}