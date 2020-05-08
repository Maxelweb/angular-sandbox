import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public username: string;
  public isUserLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) { 
    auth.usersignedin.subscribe(
      (user: User) => { 
        this.username = user.name;
        this.isUserLoggedIn = true;
      }
    );
    auth.usersignedup.subscribe(
      (user: User) => { 
        this.username = user.name;
        this.isUserLoggedIn = true;
      }
    );
    auth.userlogout.subscribe(
      () => { 
        this.username = '';
        this.isUserLoggedIn = false;
      }
    );
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    if(this.isUserLoggedIn){
      const user = this.auth.getUser();
      this.username = user.name;
    }
  }

  signIn(e){
    e.preventDefault();
    this.router.navigate(['login']);
  }

  signUp(e){
    e.preventDefault();
    this.router.navigate(['signup']);
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 300);
  }

}
