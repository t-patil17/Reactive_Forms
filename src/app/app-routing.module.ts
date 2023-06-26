import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component';
import { StaffComponent } from './staff/staff.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [

  {
    path:"" , component:HomeComponent , pathMatch:"full",
  },
  {
    path:"company", component:CompanyComponent ,
  },
  {
    path:"billing", component:BillingComponent,
  },
  {
    path:"staff", component:StaffComponent,
  },
  {
    path:"employee", component:EmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
