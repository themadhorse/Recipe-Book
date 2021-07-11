import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, switchMap, map, tap, filter } from "rxjs/operators";
import * as AuthActions from './auth.actions';
import { environment } from '../../../environments/environment';
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { User } from "../user.model";
import { AuthService } from "../auth.service";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName?: string;
  registered?: boolean;
}

const handleAuthentication = ({ expiresIn, email, localId, idToken }: AuthResponseData) => {
  const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));
  const user = new User(email, localId, idToken, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.Authenticate_Success({ email: email, id: localId, _token: idToken, _tokenExpirationDate: expirationDate, redirect: true });
}

const handleError = (errorRes): Observable<AuthActions.Authenticate_Fail> => {
  let errorMsg = "An unknown error occurred";
  if (!errorRes.error || !errorRes.error.error)
    return of(new AuthActions.Authenticate_Fail(errorMsg));
  switch (errorRes.error?.error?.message) {
    case 'EMAIL_EXISTS': errorMsg = "Email address is already in use";
      break;
    case 'OPERATION_NOT_ALLOWED': errorMsg = "Password sign-in is disabled for this project";
      break;
    case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMsg = 'Unusual activity detected. Please try again later';
      break;
    case 'EMAIL_NOT_FOUND': errorMsg = "Invalid email";
      break;
    case 'INVALID_PASSWORD': errorMsg = "Incorrect password";
      break;
    case 'USER_DISABLED': errorMsg = "This user has been disabled";
  }
  return of(new AuthActions.Authenticate_Fail(errorMsg));
}

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    switchMap((signupAction: AuthActions.Signup_Start) => {
      return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
        { email: signupAction.payload.email, password: signupAction.payload.password, returnSecureToken: true }
      )
      .pipe(
        map(() => new AuthActions.Signup_Success()),
        catchError(errorRes => handleError(errorRes))
      )
    })
  );

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.Login_Start) => {
      return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
        { email: authData.payload.email, password: authData.payload.password, returnSecureToken: true }
      )
      .pipe(
        tap((resData) => {
          this.authService.setLogoutTimer(+resData.expiresIn*1000);
        }),
        map((resData: AuthResponseData) => handleAuthentication(resData)),
        catchError(errorRes => handleError(errorRes))
      )
    })
  );

  @Effect({ dispatch: false })
  authRedirect = this.actions$.pipe(ofType(AuthActions.AUTHENTICATE_SUCCESS),
    tap((AuthSuccessAction: AuthActions.Authenticate_Success) => {
      if(AuthSuccessAction.payload.redirect)
        this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(ofType(AuthActions.LOGOUT),
    tap(() => {
      this.authService.clearLogoutTimer();
      localStorage.removeItem("userData");
      this.router.navigate(['/auth']);
    })
  );

  @Effect()
  autoLogin = this.actions$.pipe(ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const userData: {
        email: string,
        id: string,
        _token: string,
        _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    
    if(userData)
    {
      const expirationDate = new Date(userData._tokenExpirationDate);
      const loadedUser = new User(userData.email, userData.id, userData._token, expirationDate);
        
      if(loadedUser.token){
        //this.user.next(loadedUser);
        const timeLeft = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.authService.setLogoutTimer(timeLeft);
        return new AuthActions.Authenticate_Success({email: loadedUser.email, id: loadedUser.id, _token: loadedUser.token, _tokenExpirationDate: expirationDate, redirect: false });
        // this.autologout(timeLeft);
      }
  }
    }),
    filter(Boolean)
  );



  constructor(private actions$: Actions, private http: HttpClient, private router: Router, private authService: AuthService) { }



}