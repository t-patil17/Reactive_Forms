import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { BillingComponent } from './billing/billing.component';
import { StaffComponent } from './staff/staff.component';
import { CompanyComponent } from './company/company.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    BillingComponent,
    StaffComponent,
    CompanyComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
