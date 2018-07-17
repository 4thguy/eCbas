import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

  model = new User('', '', '', '');

  onSubmit() {
    this.userService.addUser(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.userService.login(this.model.username, this.model.password)
      .subscribe(model => this.model = model[0]);
  }
}
