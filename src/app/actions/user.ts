import { Action } from '@ngrx/store';
import { User } from '../user';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) { }
}
export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor(public payload: User) { }
}
export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: User) { }
}
export class LoginFailureAction implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: User) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;
