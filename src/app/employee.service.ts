import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseURL='http://localhost:8080/api/v1/employees';
  // private baseURL1="http://localhost:8080/api/v1/employees";
  private baseURL='https://springboot-java-backend.herokuapp.com/api/v1/employees';
  private baseURL1="https://springboot-java-backend.herokuapp.com/api/v1/employees";

  constructor(private httpClient:HttpClient) { }


getEmployeesList1():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.baseURL1}`);

}
getEmployeeslist() {
  return this.httpClient.get<any>(`${this.baseURL}`).pipe(map((res: any) => {
    return res;
  }))
}
creatEmployee(employee:Employee):Observable<Object>{
  return this.httpClient.post(`${this.baseURL1}`,employee);

}
//   getEmployeeById(id:number:Observable<Object>{
//   return this.httpClient.get<Employee>(`${this.baseURL1}/${id}`);


// }
getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseURL1}/${id}`);

}
updateEmployee(id:number,employee:Employee):Observable<Object>{
  return this.httpClient.put(`${this.baseURL1}/${id}`,employee);

}
deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL1}/${id}`);
}


}


