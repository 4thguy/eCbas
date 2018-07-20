import { User } from '../user';
import * as user from '../actions/user';

import { UsersService } from '../users.service';

import { HttpClient } from '@angular/common/http';

export interface State {
  user: Partial<User>,
  errorMessage: string
};

export const initialState: State = {
  user: null,
  errorMessage: 'empty object',
};

export function reducer(state = initialState, action: user.Actions): State {
  switch (action.type) {
    case user.LOGIN:
      return {
        user: null,
        errorMessage: null,
      }
    case user.LOGIN_SUCCESS:
      return {
        user: action.payload,
        errorMessage: null,
      }
    case user.LOGIN_FAILURE:
      return {
        user: null,
        errorMessage: action.payload.toString(),
      }
    case user.LOGOUT:
      return {
        user: null,
        errorMessage: null,
      }

    default: {
      return state;
    }
  }
}
