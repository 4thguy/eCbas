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
    login$: Observable<Action> = this.actions$
      .ofType(userActions.LOGIN)
      .debounceTime(300)
      .switchMap(query => {
        return this.usersService.login(query.payload.username, query.payload.password)
          .map(user => new userActions.LoginSuccessAction(user))
          .catch(error => new userActions.LoginFailureAction(error));
      })

    constructor(
      private actions$: Actions,
      private usersService: UsersService,
      ) { }
}
