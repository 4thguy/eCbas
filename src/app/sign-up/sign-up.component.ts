import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UsersService } from '../users.service';

import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsersService,
  ) { }

  ngOnInit() {
  }

  model = new User('', '', '', '');

  onSubmit() {
    this.userService.addUser(this.model)
      .subscribe(() => this.goNext());
  }

  goNext() {
    this.router.navigate(['/sign-in']);
  }
}
