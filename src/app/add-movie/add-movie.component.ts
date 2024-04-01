import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../service/movie.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  userform!: FormGroup;
  constructor(private formBuilder: FormBuilder, private movService: MovieService, private myRoute: Router)   // DI
  
  {
   
  }
 
  ngOnInit()                                     // this function will be called implicitly after constructor
  {
    this.userform = this.formBuilder.group({
      movieName: ['', Validators.required],
      movieYear: ['', Validators.required],
      movieCast: ['', Validators.required],
      moviePosterLink: ['', Validators.required],
      movieDesc: ['', Validators.required],
      movieRating: ['', Validators.required]
    });
  }
    addMovie(): void
    {
      this.movService.addMovie(this.userform.value).subscribe(res =>{
        console.log(res);  //if login is successfull then we can maintain the session to navigate to any page.
        // var username = this.userform.value.userName;
        alert("Movie Added Successfully");
        
        this.myRoute.navigate(['movie-list']);
      
        // if everything is fine, then we can redirect to dashboard page
 
      },err =>{
        console.log(err);
      })
    }
}
