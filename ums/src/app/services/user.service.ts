import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

    private APIURL = 'http://localhost:8000/users'

    constructor(private http: HttpClient, private auth: AuthService){

    }

    users: Array<User> =  [ ];


    getAuthHeader() {
        let header = new HttpHeaders(
            {
                Authorization: 'Bearer ' + this.auth.getToken()
            }
        )
        return header;
    }

    getUsers() {
        return this.http.get(this.APIURL, {
            headers: this.getAuthHeader()
        });
    }

    getUser(id: number){
        return this.http.get(this.APIURL + '/' + id, {
            headers: this.getAuthHeader()
        });
    }

    deleteUsers(user) {
        return this.http.delete(this.APIURL + '/' + user.id, {
            headers: this.getAuthHeader()
        });
    }

    updateUser(user: UserInterface) {
        user['_method'] = 'PUT';
        return this.http.post(this.APIURL + '/' + user.id, user, {
            headers: this.getAuthHeader()
        });
    }

    createUser(user: UserInterface) {
        return this.http.post(this.APIURL, user, {
            headers: this.getAuthHeader()
        });
    }
}