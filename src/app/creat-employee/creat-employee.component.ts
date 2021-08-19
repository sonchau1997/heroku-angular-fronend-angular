import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.scss']
})
export class CreatEmployeeComponent implements OnInit {

  employee: Employee=new Employee();

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {

  }
  public saveEmployee(){
    this.employeeService.creatEmployee(this.employee).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));

  }
  public gotoEmployeeList(){
    this.router.navigate(['/list']);

  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    this.gotoEmployeeList();

  }
  public addEmployee(){

  }


}
