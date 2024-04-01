import { Component, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe } from '@angular/common';
import { UserService } from '../service/user.service';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CurrencyPipe,DatePipe,JsonPipe,LowerCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
 
  userform!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private myRoute: Router)   // DI
  {
   
  }
 
  ngOnInit()                                     // this function will be called implicitly after constructor
  {
    this.userform = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
    loginValidate(): void
    {
      this.userService.login(this.userform.value).subscribe(res =>{
        console.log(res);  //if login is successfull then we can maintain the session to navigate to any page.
        var username = this.userform.value.userName;
        sessionStorage.setItem('userName',username);  //now state is maintained for the user.
        if(res) {
          alert("Login Successfull")
          this.myRoute.navigate(['movie-list']);
       }
        // if everything is fine, then we can redirect to dashboard page
 
      },err =>{
        console.log(err);
      })
    }
  }