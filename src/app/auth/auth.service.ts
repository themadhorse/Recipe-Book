import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';



@Injectable({ providedIn: "root" })
export class AuthService {
    //user = new BehaviorSubject<User>(null);
    tokenExpirationTimer;

    constructor(private store: Store<fromApp.AppState>) { }

    // signup(email: string, password: string) {
    //     return this.http.post<AuthResponseData>(
    //         `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
    //         { email: email, password: password, returnSecureToken: true }
    //     ).pipe(catchError(this.handleError));
    // }

    // login(email: string, password: string) {
    //     return this.http.post<AuthResponseData>(
    //         `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
    //         { email: email, password: password, returnSecureToken: true }
    //     ).pipe(catchError(this.handleError),
    //         tap(resData => { this.handleAuthentication(resData) }));
    // }

    // logout() {
    //     //this.user.next(null);
    //     //this.router.navigate(['/auth']);
    //     localStorage.removeItem('userData');
    //     if(this.tokenExpirationTimer)
    //         clearTimeout(this.tokenExpirationTimer);
    //     this.tokenExpirationTimer = null;
    // }

    setLogoutTimer(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new AuthActions.Logout());
        }, expirationDuration);
    }

    clearLogoutTimer(){
        if(this.tokenExpirationTimer)
            clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }

    // autoLogin(){
    //     const userData: {
    //         email: string,
    //         id: string,
    //         _token: string,
    //         _tokenExpirationDate: string
    //     } = JSON.parse(localStorage.getItem('userData'));
    //     if(!userData)
    //         return;
    //     const expirationDate = new Date(userData._tokenExpirationDate);
    //     const loadedUser = new User(userData.email, userData.id, userData._token, expirationDate);

    //     if(loadedUser.token){
    //         //this.user.next(loadedUser);
    //         this.store.dispatch(new AuthActions.Authenticate_Success({email: loadedUser.email, id: loadedUser.id, _token: loadedUser.token, _tokenExpirationDate: expirationDate }));
    //         const timeLeft = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    //         this.autologout(timeLeft);
    //     }
    // }

    // private handleAuthentication({ email, localId, idToken, expiresIn }: AuthResponseData) {
    //     const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));
    //     const user = new User(email, localId, idToken, expirationDate);
    //     //this.user.next(user);
    //     this.store.dispatch(new AuthActions.Authenticate_Success({email: email, id: localId, _token: idToken, _tokenExpirationDate: expirationDate}));
    //     this.autologout(+expiresIn*1000);
    //     localStorage.setItem('userData', JSON.stringify(user));
    // }

    // private handleError(errorRes: HttpErrorResponse) {
    //     let errorMsg = "An unknown error occurred";
    //     if (!errorRes.error || !errorRes.error.error)
    //         return throwError(errorMsg);
    //     switch (errorRes.error?.error?.message) {
    //         case 'EMAIL_EXISTS': errorMsg = "Email address is already in use";
    //             break;
    //         case 'OPERATION_NOT_ALLOWED': errorMsg = "Password sign-in is disabled for this project";
    //             break;
    //         case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMsg = 'Unusual activity detected. Please try again later';
    //             break;
    //         case 'EMAIL_NOT_FOUND': errorMsg = "Invalid email";
    //             break;
    //         case 'INVALID_PASSWORD': errorMsg = "Incorrect password";
    //             break;
    //         case 'USER_DISABLED': errorMsg = "This user has been disabled";
    //     }
    //     return throwError(errorMsg);
    // }
}