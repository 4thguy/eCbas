import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userActions from '../actions/user';
import * as userReducer from '../reducers/user';
import { User } from '../user';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private router: Router,
    private userService: UsersService,
    private store : Store<userReducer.State>,
  ) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {
    this.store.dispatch({
      type: userActions.LOGOUT,
    });
    this.user$.subscribe((userState) => {
      if (userState.user === null) {
        this.goNext();
      }
    });
  }

  goNext() {
    this.router.navigate(['/']);
  }

}
