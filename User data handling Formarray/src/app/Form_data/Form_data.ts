import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService, users } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './Form_data.html',
  styleUrls: ['./Form_data.scss']
})
export class UserFormComponent implements OnInit {

  public id: number = 0;
  employeeForm!: FormGroup;
  showAddButton: boolean = true;
  showFiller = false;

  constructor(private fb: FormBuilder, private userservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      users: this.fb.array([]), 
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const alldata = this.userservice.get_id(this.id);

      if (alldata) {
        this.showAddButton = false;
        this.populateForm(alldata);
      }
    });
  }

  get usersFormArray() {
    return this.employeeForm.get('users') as FormArray;
  }

  addUser() {
    const newUserGroup = this.fb.group({
      Id: ['', Validators.required],
      name: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', Validators.required],
    });

    this.usersFormArray.push(newUserGroup);
  }

  removeUser(index: number) 
  {
    this.usersFormArray.removeAt(index);
  }

  populateForm(data: users) 
  {
    this.addUser(); 

    const userForm = this.usersFormArray.at(0);
    userForm.patchValue(data);
  }

  onSubmit() 
  {
    if (this.employeeForm.valid) {
      const newEmployees: users[] = this.employeeForm.value.users;
      this.userservice.ELEMENT_DATA.push(...newEmployees);
      this.employeeForm.reset();
    }
  }

  on_Update() 
  {
    const updatedUsersData: users[] = this.employeeForm.value.users;
    for (const updatedUser of updatedUsersData) {
      this.userservice.update(updatedUser);
    }
  }

  getFormattedFormData(): string 
  {
    return JSON.stringify(this.employeeForm.value, null, 2);
  }
}
