import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /* Metodo 1 promise and async */

  async signIn(form: NgForm){
    if(!form.valid)
      return false;

    try{

      const resp = await this.auth.signIn(form.value.email, form.value.password)
      .toPromise();
      alert(resp.user_name + " - logged in successfully");
      this.router.navigate(['users']);

    } catch (e) {
      switch (e.status) {
        case 401: 
          alert(e.error.error);
          break;
        case 404: 
          alert(e.statusText);
          break;
        case 500:
          alert('Error contacting server');
          break;
      }
    }

    /* Metodo 1 subscribe + pipe from rjxs 

    this.auth.signIn(form.value.email, form.value.password)
      .subscribe(
        (payload) => {
          alert("Login corretto");
          this.router.navigate(['users']);
        },
        ({error: err}) => {
          alert(err.error);
        }
      );
    */
  }
}
