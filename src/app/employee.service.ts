import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { EmployeeDTO } from './EmployeeDTO';
import { Observable, of } from 'rxjs';

//Constants
const BACKEND_URL = "http://localhost:9090/employee/";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}


  public getAllEmployees(): Observable<EmployeeDTO  []>{
    let url = BACKEND_URL + 'getAllEmployees';
    return this.httpClient
      .get<EmployeeDTO []>(url);
  }

  public getEmployeeById(employeeId: number): Observable<EmployeeDTO>{
    let url = BACKEND_URL + employeeId;
    return this.httpClient
      .get<EmployeeDTO>(url);
  }
}
