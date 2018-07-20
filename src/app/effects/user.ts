import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, EffectNotification } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userActions from '../actions/user';

import { User } from '../user';

import { UsersService } from '../users.service';

@Injectable()
export class UserEffect {

  @Effect()
  login$ = this.actions$
    .ofType(userActions.LOGIN)
    .debounceTime(300)
    .switchMap((response: userActions.LoginAction) => {
      return this.usersService.login(response.payload.username, response.payload.password)
        .map(loggedIn => loggedIn ? new userActions.LoginSuccessAction({
            name: 'Piero',
            surname: 'Cascio'
          }) :
          new userActions.LoginFailureAction('Incorrect Credentials'));
    });

    constructor(
      private actions$: Actions,
      private usersService: UsersService,
      ) { }
}
