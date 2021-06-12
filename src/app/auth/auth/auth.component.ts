import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogInMode = true;
  isLoading = false;
  error:string = null;
  @ViewChild("f", { static: false }) authForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitch(){
    this.isLogInMode = !this.isLogInMode;
  }

  onSubmit(){
    if(!this.authForm.valid)
      return;
    const email: string = this.authForm.value.email;
    const password: string = this.authForm.value.password;
    
    this.isLoading = true;
    if(this.isLogInMode)
    {}
    else
    {
      this.authService.signup(email, password)
      .subscribe(
        responseData => { console.log(responseData); this.isLoading = false; },
        error => { this.error = 'An error occured!'; this.isLoading = false; }
      );
    }
    this.authForm.reset();
  }
}
