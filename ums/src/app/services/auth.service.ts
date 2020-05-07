import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = false;

  constructor() { }

  isUserLoggedIn() {
    // Trasformazione booleana: se esiste, sarà true, altrimenti sarà false.
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }

  signIn(email: string, password: string){

    // Controlli...

    localStorage.setItem('token', email);
    return true;
  }

  signUp(username: string, email: string, password: string){

  }

  logout(){
    localStorage.removeItem('token');
    this.isUserLogged = false;
  }
}
