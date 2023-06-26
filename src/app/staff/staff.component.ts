import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  
  // ngif condition variable 
  isupdate : boolean = false;

  staff : any[] = [ ];
  currentindex :any ;

  // stafform = false;

  Stafform : FormGroup;

  constructor( private fb: FormBuilder){

    let data = localStorage.getItem('stafdata')
    if(data)
    this.staff = JSON.parse(data);




    this.Stafform = this.fb.group({
      name: ['' , Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      lname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required, Validators.minLength(6), Validators.maxLength(10)],
      phone:['',Validators.required]
    });
    console.log(this.Stafform); 
  }

  add(){
    this.staff.push(this.Stafform.value);

    this.Stafform.reset();

    this.isupdate = false;
 
    localStorage.setItem('stafdata', JSON.stringify(this.staff));
    
  }

  delete(i:any){
  this.staff.splice(i,1);

  localStorage.setItem('stafdata', JSON.stringify(this.staff));

  }

  edit(item:any ,i:any){
    this.isupdate= true;
    
    this.currentindex = i;
    this.Stafform.setValue(item);  
    
    this.Stafform.reset();

    localStorage.setItem('stafdata', JSON.stringify(this.staff));

  }

  update(){
    this.staff[this.currentindex] = this.Stafform.value;

    this.isupdate = false;
    
    localStorage.setItem('stafdata', JSON.stringify(this.staff));

  }

}
