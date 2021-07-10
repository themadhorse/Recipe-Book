import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
  user: User;
  authError: string,
  loading: boolean,
  hasSignedUp: boolean
}

const initialState = {
  user: null,
  authError: null,
  loading: false,
  hasSignedUp: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions){
  switch(action.type){
    case AuthActions.AUTHENTICATE_SUCCESS: 
      const user = new User(action.payload.email, action.payload.id, action.payload._token, action.payload._tokenExpirationDate);
      return {...state, user: user, authError: null, loading: false};
    case AuthActions.LOGOUT:
      return {...state, user: null};
    case AuthActions.LOGIN_START:
      return {...state, authError: null, loading: true};
    case AuthActions.AUTHENTICATE_FAIL:
      return {...state, user: null, authError: action.payload, loading: false, hasSignedUp: false}
    case AuthActions.SIGNUP_START:
      return {...state, user: null, loading: true, authError: null};
    case AuthActions.SIGNUP_SUCCESS:
      return {...state, loading: false, authError: null, hasSignedUp: true};
    case AuthActions.CLEAR_MESSAGES:
      return {...state, hasSignedUp: false, authError: null};
    default:
      return state;
  }
}