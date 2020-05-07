import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isUserLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
