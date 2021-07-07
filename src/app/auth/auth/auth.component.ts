import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogInMode = true;
  isLoading = false;
  isSignedUp = false;
  error: string = null;
  @ViewChild("f", { static: false }) authForm: NgForm;

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select("auth").subscribe(
      authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
      }
    );
  }

  onSwitch(){
    this.isLogInMode = !this.isLogInMode;
    this.isSignedUp = false;
    this.error = null;
  }

  onSubmit(){
    if(!this.authForm.valid)
      return;
    const email: string = this.authForm.value.email;
    const password: string = this.authForm.value.password;

    let authObs: Observable<AuthResponseData>;
    
    this.isLoading = true;
    if(this.isLogInMode)
    {
      //authObs = this.authService.login(email, password);
      this.store.dispatch(new AuthActions.Login_Start({ email: email, password: password }));
    }
    else
    {
      authObs = this.authService.signup(email, password)
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
}
