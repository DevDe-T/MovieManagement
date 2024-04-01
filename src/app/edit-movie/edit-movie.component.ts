import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../service/movie.Service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
    userform!: FormGroup;
    constructor(private formBuilder: FormBuilder, private movService: MovieService, private myRoute: Router)   // DI
   
    {
     
    }
    movie :any;
    movieId:any;
    ngOnInit()                                     // this function will be called implicitly after constructor
    {
      this.userform = this.formBuilder.group({
        mid:['',Validators.required],
        movieName: ['', Validators.required],
        movieYear: ['', Validators.required],
        movieCast: ['', Validators.required],
        movieRating: ['', Validators.required],
        movieDesc: ['', Validators.required],
        moviePosterLink: ['', Validators.required]
      });
      this.movieId=sessionStorage.getItem('editid');
      this.movService.searchMovies(this.movieId).subscribe(res=>{
        console.log(res);
        this.movie = res;
        this.userform.patchValue({
          mid:this.movie.mid,
          movieName: this.movie.movieName,
          movieYear: this.movie.movieYear,
          movieCast: this.movie.movieCast,
          movieRating: this.movie.movieRating,
          movieDesc: this.movie.movieDesc,
          moviePosterLink: this.movie.moviePosterLink
        });
      })
      console.log('hi');
     
    }
      editMovie(): void
      {
       
        this.movService.editMovies(this.userform.value).subscribe(res =>{
          console.log(res);  //if login is successfull then we can maintain the session to navigate to any page.
          // var username = this.userform.value.userName;
          alert('upated');
          this.myRoute.navigate(['movie-list']);
       
          // if everything is fine, then we can redirect to dashboard page
   
        },err =>{
          console.log(err);
        })
      }
 
}