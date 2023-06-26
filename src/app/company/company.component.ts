import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements CompanyComponent {

   compdata :any[] =[];

   seleindex :any ;

   select : any;

  //  isshow :boolean = false ;
   
  form :FormGroup = new FormGroup({
    cname : new FormControl(''),
    email : new FormControl(''),
    country : new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder){

    let data = localStorage.getItem('companyinfo');
    if(data)
    this.compdata = JSON.parse(data);
  }
  
  ngOnInit(): void{
    this.form = this.formBuilder.group({
      cname :['', Validators.required],
      email :['', Validators.required , Validators.email],
      country :['', Validators.required]
    })

  }

  get f(){
    return this.form.controls;
  }

  add() : void{
    this.submitted = true;

    if (this.form.invalid){
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

    // this.form.value.id=this.randomid();

    this.compdata.push(this.form.value);
    this.form.reset();

    // this.isshow= false;

    localStorage.setItem('companyinfo', JSON.stringify(this.compdata));


  }

  edit(i: any , compdata:any){

    this.form.setValue(compdata);

   

  //  this.isshow = true;


    // this.seleindex = this.compdata.findIndex((x:any) => x.id === obj.id );
    
    // this.form.patchValue({cname:obj.cname, 
    //   email:obj.email,
    //   country:obj.country
    //  })

    localStorage.setItem('companyinfo', JSON.stringify(this.compdata));

    

  }

  remove(id:any){
    this.compdata.splice(this.seleindex , 1);

    // this.seleindex = this.compdata.findIndex((x:any) => x.id === id );

    localStorage.setItem('companyinfo', JSON.stringify(this.compdata));

  }

  // randomid(){
  //   return '_' + Math.random().toString(36).substr(2 , 9);
  // }

  update(){
    this.compdata[this.seleindex]= this.form.value

    // this.isshow = false;
    localStorage.setItem('companyinfo', JSON.stringify(this.compdata));

  
  }

  onreset(){
    this.submitted =false;
    this.form.reset();
  }



}
