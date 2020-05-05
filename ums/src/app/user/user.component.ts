import { Component, OnInit, Input } from '@angular/core';

@Component({
  // inputs: ['user:user-data'], // Alternativa per @input
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user // user-data è un alias
  constructor() { }

  ngOnInit(): void {
  }

}
