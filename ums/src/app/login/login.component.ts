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
    auth.usersignedin.subscribe(
      (user: User) => {
        router.navigate(['users'])
      }
    );
  }

  ngOnInit(): void {
  }

  signIn(form: NgForm){
    if(!form.valid)
      return false;

    let result = this.auth.signIn(form.value.email, form.value.password);
    if(result){
      this.router.navigate(['users']);
    }
  }
}
