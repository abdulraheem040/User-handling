import { users } from '../data.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService} from '../data.service';
import {FormControl, FormBuilder,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-works',
  templateUrl: './user_table.html',
  styleUrls: ['./user_table.scss']
})
export class UserTableComponent {
  

  datasource : users[]=[]
  displayedColumns: string[] = ['Name', 'Id', 'Password', 'Email','actions'];
  
  constructor( private userservice : DataService,private router: Router)
  {
     
    this.datasource = userservice.ELEMENT_DATA

  }
  //goto()
  //{
    //this.router.navigateByUrl('Users/New')
  //}
  
  delete(row: any): void 
  {
    const index = this.datasource.indexOf(row);
    if (index >= 0) 
    {
      this.datasource.splice(index, 1);
    }

    this.datasource = [...this.datasource]
}


}

