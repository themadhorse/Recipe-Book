import { Action } from "@ngrx/store";

export const LOGIN_START = `[Authentication] Login Start`;
export const LOGIN = '[Authentication] Login'; //best naming convention
export const LOGIN_FAIL = `[Authentication] Login Fail`;
export const LOGOUT = '[Authentication] Logout';


export class Login implements Action{
  readonly type = LOGIN;

  constructor(public payload: {email: string, id: string, _token: string, _tokenExpirationDate: Date}) {}
}

export class Login_Fail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string){}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class Login_Start implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email: string, password: string}){}
}

export type AuthActions = Login | Logout | Login_Start | Login_Fail;