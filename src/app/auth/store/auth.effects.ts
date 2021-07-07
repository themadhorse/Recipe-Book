import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, Effect, EffectsFeatureModule, ofType } from "@ngrx/effects";
import { catchError, switchMap, map, tap } from "rxjs/operators";
import * as AuthActions from './auth.actions';
import { environment } from '../../../environments/environment';
import { of } from "rxjs";
import { Router } from "@angular/router";

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

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.Login_Start) => {
        return this.http.post<AuthResponseData>(  
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
          { email: authData.payload.email, password: authData.payload.password, returnSecureToken: true }
        ).pipe(
          map((resData: AuthResponseData) => {
            const expirationDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000));
            return new AuthActions.Login({email: resData.email, id: resData.localId, _token: resData.idToken, _tokenExpirationDate: expirationDate});
          }),
          catchError(errorRes => {
            let errorMsg = "An unknown error occurred";
            if (!errorRes.error || !errorRes.error.error)
              return of(new AuthActions.Login_Fail(errorMsg));
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
            return of(new AuthActions.Login_Fail(errorMsg));
          })
        )
      }),

    );

    @Effect({dispatch: false})
    authSuccess = this.actions$.pipe(ofType(AuthActions.LOGIN),
     tap(() => {
        this.router.navigate(['/']);
      })
    );
  
  constructor(private actions$: Actions, private http: HttpClient, private router: Router){}


}