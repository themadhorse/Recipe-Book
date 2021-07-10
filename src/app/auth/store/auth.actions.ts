import { Action } from "@ngrx/store";

export const LOGIN_START = `[Authentication] Login Start`;
export const AUTHENTICATE_SUCCESS = '[Authentication] Login'; //best naming convention
export const AUTHENTICATE_FAIL = `[Authentication] Login Fail`;
export const LOGOUT = '[Authentication] Logout';
export const SIGNUP_START = `[Authentication] Signup Start`;
export const SIGNUP_SUCCESS = `[Authentication] Signup`;
export const CLEAR_MESSAGES = `[Authentication] Clear Messages`;
export const AUTO_LOGIN = `[Authentication] Auto Login`;


export class Authenticate_Success implements Action{
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: {email: string, id: string, _token: string, _tokenExpirationDate: Date}) {}
}

export class Authenticate_Fail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string){}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class Login_Start implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email: string, password: string}){}
}

export class Signup_Start implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string, password: string }){}
}

export class Signup_Success implements Action {
  readonly type = SIGNUP_SUCCESS;
}

export class Clear_Messages implements Action {
  readonly type = CLEAR_MESSAGES;
}

export class Auto_Login implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions = Authenticate_Success | Logout | Login_Start | Authenticate_Fail | Signup_Start | Signup_Success | Clear_Messages | Auto_Login;