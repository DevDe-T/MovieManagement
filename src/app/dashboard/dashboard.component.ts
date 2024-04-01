import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.Service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../service/movie.Service';
import { Router, RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,NgIf, NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent
{
  usr: any;
  employee:any;
  errorMessage?:string;
  emplID:any;
  movID:any;
  movie:any;
  allmovies:any;
  emovID:any;
  constructor(private empService: EmployeeService, private movService : MovieService, private myRoute: Router)      // applying DI for employee service class  
  {
   
  }
 
  ngOnInit()                                    
  {
    this.usr =sessionStorage.getItem('userName');
  }
 
  searchEmployee(): void
  {
    this.empService.getEmployeeDetails(this.emplID).subscribe(res=>{    //after subscribe request will hit to service known as lazi loading architecture and technique
      console.log(res);
      this.employee = res;
    },err=>{
      this.errorMessage="Employee not found";
    })
  }

  searchMovie() : void
  {
    this.movService.searchMovies(this.movID).subscribe(res=>{
      console.log(res);
      this.movie = res;
    }, err =>{
      this.errorMessage = "Movie not found";
    })
  }

  RemoveMovie(id:any) : void
  {
    this.movService.deleteMovie(id).subscribe(res=>{
      console.log(res);
      this.myRoute.navigate(['employee-list']);
      
    }, err =>{
      this.errorMessage = "Movie"; 
    })
  }
  
  getAllMovies() :void
  {
    this.movService.getMovies().subscribe(res =>{
      this.allmovies = res;
    }, err => {
      this.errorMessage = "Movies not found"; 
    })
  }

  EditMovie(id : any): void
  {
    this.emovID = id;
    sessionStorage.setItem('editid',this.emovID);
    console.log(this.emovID);
    this.myRoute.navigate(['edit-movie']);
  }
  
}