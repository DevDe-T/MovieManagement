import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../service/movie.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  allmovies:any;
  errorMessage:any;

  constructor(private movService : MovieService, private myRoute: Router)
  {
    this.getAllMovies();
  }
  
  getAllMovies() :void
  {
    this.movService.getMovies().subscribe(res =>{
      this.allmovies = res;
      console.log(821479);
    }, err => {
      this.errorMessage = "Movies not found"; 
    })
  }
  
}
