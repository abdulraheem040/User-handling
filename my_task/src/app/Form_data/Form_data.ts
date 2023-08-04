import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataService, users } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './Form_data.html',
  styleUrls: ['./Form_data.scss']
})
export class UserFormComponent implements OnInit{
  
  
  public id: number = 0;
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private userservice : DataService,private route: ActivatedRoute) 
  {
      
  }
  ngOnInit() {

    this.employeeForm = this.fb.group({
      Id: ['', Validators.required],
      name: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', Validators.required],
    });
      
      this.route.params.subscribe(params => {
      this.id = +params['id']; 
      console.log(this.id)

     const alldata = this.userservice.get_id(this.id)
     console.log(alldata)

     if (alldata)
     {
      //this.user = alldata;
      this.employeeForm.patchValue({
        ...alldata
      });
    }
   });
    
  }
  onSubmit() {
    if (this.employeeForm.valid) 
    {
      const newEmployee: users = this.employeeForm.value;
      this.userservice.ELEMENT_DATA.push(newEmployee);
      this.employeeForm.reset();

    }
  }

 on_Update()
 {
   const updatedUserData = this.employeeForm.value;

   this.userservice.update(updatedUserData);
 }
}
