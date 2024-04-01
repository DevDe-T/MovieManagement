import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Route, Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
 
export class RegisterComponent
{
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router : Router)   // DI
  {
      
  }
 
  ngOnInit()                                     // this function will be called implicitly after constructor
  {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required, Validators.minLength(5)],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
 
  onSubmit()
  {
    // console.log(this.userform.value);
    this.userService.register(this.userForm.value).subscribe(res =>{
      console.log(res);
      alert("Register Successfull")
      this.router.navigate(['log-in']);
    },err =>{
      console.log(err);
    })
  }
 
 
 
}

