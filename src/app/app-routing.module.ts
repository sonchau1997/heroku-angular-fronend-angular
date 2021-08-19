import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatEmployeeComponent } from './creat-employee/creat-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
 { path: 'create', component: CreatEmployeeComponent },
 {path:'update/:id',component:UpdateEmployeeComponent},
 {path:'view/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
