import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userReducer from '../reducers/user';
import { User } from '../user';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  user$: Observable<any>;
  user: User;

  constructor(
    private store: Store<userReducer.State>,
  ) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {
    this.user$.subscribe((userState) => {
      this.user = userState.user;
      console.log(this.user);
    });
  }

  canShow(menuItem: string): boolean {
    menuItem = menuItem.toUpperCase();
    switch (menuItem) {
      case 'GREETING':
      case 'SIGN-OUT':
        return this.user !== null;
      case 'SIGN-IN':
      case 'SIGN-UP':
        return this.user === null;
      default:
        return false;
    }
  }
}
