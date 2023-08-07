import { users } from '../data.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService} from '../data.service';
import { UserFormComponent } from '../Form_data/Form_data';
@Component({
  selector: 'app-works',
  templateUrl: './user_table.html',
  styleUrls: ['./user_table.scss']
})
export class UserTableComponent {
  
  datasource : users[]=[]
  displayedColumns: string[] = ['Name', 'Id', 'Password', 'Email','actions'];
  
  private edit!: UserFormComponent
  constructor( private userservice : DataService, private router: Router)
  {
     
    this.datasource = userservice.ELEMENT_DATA
    
  }
  
  
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

