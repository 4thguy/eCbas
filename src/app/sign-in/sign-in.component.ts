import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  model: User;

  ngOnInit() {
    this.generateModel();
  }

  generateModel(): User {
    this.model = new User('', '', '', '');
    return this.model;
  }

  onSubmit() {
    this.userService.login(this.model.username, this.model.password)
      .subscribe(
        model => this.goBack(model),
        model => this.model = (model[0] || this.generateModel()),
      );
  }

  goBack(users: User[]) {
    console.log(users);
    console.log('logged in');
  }
}
