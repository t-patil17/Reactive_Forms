import { Component , OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  tittle =" ReactiveForms"

  isenable:boolean =false;

  employedata: any[]= [];

  updtind: any ; 

  selectind : any ;
  seleobj: any ;

  employeForm: FormGroup = new FormGroup({

    Username : new FormControl(''),
    email : new FormControl(''),
    Password :new FormControl(''),
    confirmpassword : new FormControl(''),
    // acceptTerms : new FormControl(false)
  });

  submitted = false;

  constructor(private formBuilder:FormBuilder){
    let data = localStorage.getItem('empdata')
    if(data)
    this.employedata= JSON.parse(data);
  }

  ngOnInit():void{

    this.employeForm = this.formBuilder.group({
      Username: ['', Validators.required, Validators.minLength(6) , Validators.maxLength(10)],

      email:['', Validators.required, Validators.email],

      Password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(10)],

      confirmpassword: ['', Validators.required],

      // acceptTerms: [false, Validators.requiredTrue],

    },

    // {
    //   Validators: [validation.match('password', 'confirmpassword')]

    // }
    
  );
  }

 get f() {
  return this.employeForm.controls
 }

   onsubmit(): void{
    this.submitted = true;

    if(this.employeForm.invalid){
      return;
    }

    this.employedata.push(this.employeForm.value);

    this.employeForm.reset();

    this.isenable = false;


    localStorage.setItem('empdata', JSON.stringify(this.employedata))

    // console.log(JSON.stringify(this.employeForm.value, null, 2));
   }

   edit(i: any, object:any){


    this.isenable =true;

    this.selectind = i;
    this.seleobj = object;

    this.employeForm.patchValue({
      Username: [this.employedata[this.selectind].Username],
      email: [this.employedata [this.selectind].email],
      Password: [this.employedata[this.selectind].Password],
      confirmpassword: [this.employedata[this.selectind].confirmpassword]

    })

    localStorage.setItem('empdata', JSON.stringify(this.employedata));

    // this.employeForm.setValue(employedata);


   }

   delete(i:any){
    this.employedata.splice(i,1);
    localStorage.setItem('empdata', JSON.stringify(this.employedata));

   }

   update(){

    this.employedata[this.updtind]= this.employeForm.value ; 
    this.isenable = false; 
    
    localStorage.setItem('empdata', JSON.stringify(this.employedata));
   
   }
  

}

 

