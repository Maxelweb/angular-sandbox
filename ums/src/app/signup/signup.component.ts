import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    auth.usersignedup.subscribe(() => router.navigate(['/']))
  }

  ngOnInit(): void {
  }

  signUp(form: NgForm){
    this.auth.signUp(form.value.username, form.value.email, form.value.password);
  }

}
