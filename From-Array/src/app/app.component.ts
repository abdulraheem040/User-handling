import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'From-Array';

  emailForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      emails: this.fb.array([this.createEmailControl()]),
    });
  }

  createEmailControl(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get emailControls(): FormArray 
  {
    return this.emailForm.get('emails') as FormArray;
  }

  addEmail(): void 
  {
    this.emailControls.push(this.createEmailControl());
  }

  removeEmail(index: number): void 
  {
    this.emailControls.removeAt(index);
  }
}

