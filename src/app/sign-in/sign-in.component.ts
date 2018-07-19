import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userActions from '../actions/user';
import * as userReducer from '../reducers/user';
import { User } from '../user';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private router: Router,
    private userService: UsersService,
    private store : Store<userReducer.State>,
  ) {
    this.user$ = this.store.select('user');
  }

  model: User;

  ngOnInit() {
    this.generateModel();
    this.user$.subscribe((userState) => {
      if (userState.user !== null) {
        this.goNext();
      }
    });
  }

  generateModel(): User {
    this.model = new User('', '', '', '');
    return this.model;
  }

  onSubmit() {
    this.store.dispatch({
      type: userActions.LOGIN,
      payload: {
        username: this.model.username,
        password: this.model.password,
      }
    });


  }

  goNext() {
    this.router.navigate(['/items']);
  }
}
