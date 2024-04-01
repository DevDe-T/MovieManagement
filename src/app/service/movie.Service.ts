import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
// defining business logic layer in angular
@Injectable(
    {
        providedIn: 'root'
    }
)
export class MovieService
{
    private apiUrl ='http://localhost:5065/exl/Movie/searchMovie';
    private delApiUrl ='http://localhost:5065/exl/Movie/deleteMovie';
    private getApiUrl = 'http://localhost:5065/exl/Movie/getMovies';
    private editApiUrl = 'http://localhost:5065/exl/Movie/editMovie';
    private addApiUrl = 'http://localhost:5065/exl/Movie/addMovie';


    constructor(private httpclient: HttpClient)             // HttpClient is a class to invoke Core Web API endpoint
    {
 
    }
 
    searchMovies(mid: any) : Observable<any>
    {
        return this.httpclient.get(`${this.apiUrl}?mid=${mid}`);
    }

    deleteMovie(id: any) : Observable<any>
    {
        return this.httpclient.delete(`${this.delApiUrl}?id=${id}`)
    }

    getMovies() : Observable<any>
    {
        return this.httpclient.get(`${this.getApiUrl}`);
    }

    editMovies(edit : any) : Observable<any>
    {
        return this.httpclient.post(`${this.editApiUrl}`, edit);
    }

    addMovie(add: any) : Observable<any>
    {
        return this.httpclient.post(`${this.addApiUrl}`, add);
    }
 
 
 
}