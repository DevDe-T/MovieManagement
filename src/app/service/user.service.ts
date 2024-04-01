import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
// defining business logic layer in angular
@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService
{
    constructor(private httpclient: HttpClient)             // HttpClient is a class to invoke Core Web API endpoint
    {
 
    }
 
    register(reg: any) : Observable<any>
    {
        return this.httpclient.post('http://localhost:5065/exl/User/AccountCreate', reg);
    }
 
    login(log: any) : Observable<any>
    {
        return this.httpclient.post('http://localhost:5065/exl/User/AccountLogin', log);
    }
 
    getSession(): any  
    {
        var user = sessionStorage.getItem('userName');
        return user;
    }
}