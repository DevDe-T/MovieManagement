import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
// defining business logic layer in angular
@Injectable(
    {
        providedIn: 'root'
    }
)
export class EmployeeService
{
    private apiUrl ='http://localhost:5065/exl/Employee/searchEmployee';
    constructor(private httpclient: HttpClient)             // HttpClient is a class to invoke Core Web API endpoint
    {
        
    }
 
    getEmployeeDetails(eid: any) : Observable<any>
    {
        return this.httpclient.get(`${this.apiUrl}?id=${eid}`);
    }
 
 
 
}