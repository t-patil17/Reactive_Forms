import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
    
   billing :any[] =[];

   isshows : boolean = false;

    selindex : any ;

    formsbill: FormGroup = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address :new FormControl(''), 
    birth : new FormControl(''),
    cnum :new FormControl(''),
    cvcnumber :new FormControl(''),
  });

  submitted = false ;


  constructor(private formBuilder: FormBuilder){
    let data = localStorage.getItem('bills')
    if(data)
    this.billing = JSON.parse(data);
   }
  
  ngOnInit(): void{
 
    this.formsbill= this.formBuilder.group({
      name:['', Validators.required , ],
      email:['', Validators.required , Validators.email],
      address:['', Validators.required],
      birth:['', Validators.required],
      cnum:['', Validators.required]

    });
  }

  get f(){
    return this.formsbill.controls;
  }


  payed() :void {
    this.submitted = true;
    if( this.formsbill.invalid){
     return;
    }
    console.log(JSON.stringify(this.formsbill.value, null, 2));

    this.billing.push(this.formsbill.value);

    // console.log('heloo');

    this.isshows =false ;

    localStorage.setItem('bills', JSON.stringify(this.billing));

  }

  edit(i:any, billing:any ){
      this.formsbill.setValue(billing);

      this.isshows = true;
    localStorage.setItem('bills', JSON.stringify(this.billing));

  }

  delete(i:any){
   this.billing.splice(i,1)
   localStorage.setItem('bills', JSON.stringify(this.billing));

  }

  update(){
    this.billing[this.selindex] = this.formsbill.value;
 
    this.isshows = false;

    localStorage.setItem('bills', JSON.stringify(this.billing));


  }


}
