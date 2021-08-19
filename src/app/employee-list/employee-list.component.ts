import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
   // this.employees=[{"id":3,"firstName":"son","lastName":"chau","emailId":"chauson@gmail.com"}];
    this.getEmployees();

  }
  public getEmployees(){
    this.employeeService.getEmployeesList1().subscribe(data=>{
      this.employees=data;
    });
    console.log(this.employees);
  }
  public updateEmployee(id :number){
    this.router.navigate(['update',id]);

  }
  public deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
  public employeeDetails(id:number){
    this.router.navigate(['view',id]);

  }

}
