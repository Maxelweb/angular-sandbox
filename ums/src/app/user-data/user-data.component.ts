import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public user: User;
  public title: String = "User detail";

  constructor(private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User(); // Fallback iniziale
    // Iscrizione al 'backend' e caricamento dei dati
    this.route.paramMap.subscribe( (p) => {
      this.user = this.userService.getUser(+p.get('id'));
    })
  }

  backToUsers(){
    this.router.navigate(['users']);
  }

}
