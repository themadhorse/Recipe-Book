import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLogInMode = true;
  isLoading = false;
  isSignedUp = false;
  error: string = null;
  @ViewChild("f", { static: false }) authForm: NgForm;

  private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select("auth").subscribe(
      authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
        this.isSignedUp = authState.hasSignedUp;
      }
    );
  }

  onSwitch(){
    this.isLogInMode = !this.isLogInMode;
    this.store.dispatch(new AuthActions.Clear_Messages());
  }

  onSubmit(){
    if(!this.authForm.valid)
      return;
    const email: string = this.authForm.value.email;
    const password: string = this.authForm.value.password;

    //let authObs: Observable<AuthResponseData>;
    
    this.isLoading = true;
    if(this.isLogInMode)
    {
      //authObs = this.authService.login(email, password);
      this.store.dispatch(new AuthActions.Login_Start({ email: email, password: password }));
    }
    else
    {
      this.store.dispatch(new AuthActions.Signup_Start({ email: email, password: password }));

    }

    
    // authObs.subscribe(
    //   responseData => {
    //     console.log(responseData);
    //     this.error = null;
    //     this.isLoading = false; 

    //     if(this.isLogInMode)
    //       this.router.navigate(['/recipes']);
    //     else
    //       this.isSignedUp = true;
    //   },
    //   errorMsg => { this.isSignedUp = false; this.error = errorMsg; this.isLoading = false; }
    // );
    this.authForm.reset();
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
