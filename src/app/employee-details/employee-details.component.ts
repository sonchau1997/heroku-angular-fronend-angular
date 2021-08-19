import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee=new Employee();
 id=0;
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });

  }

}
