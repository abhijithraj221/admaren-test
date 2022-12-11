import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // declaration
  datas: any;
  required: any;
  error: any = null;
  httperror: string = '';

  // Form Group
  formData = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.email, Validators.required]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    qualification: ['', [Validators.required]],
    experience: ['', [Validators.required]],
    skills: this.fb.group({
      angular: [],
      reactjs: [],
      javascript: [],
      typescript: [],
      html: [],
      css: [],
      bootstrap: [],
      jquery: [],
      angularmaterials: [],
    }),
    serving: ['', [Validators.required]],
    offer: ['', [Validators.required]],
    ionic: ['', [Validators.required]],
    switch: ['', [Validators.required]],
    relocate: ['', [Validators.required]],
  });

  constructor(
    // Dependency injection
    private dataService: DataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    //subscribe method
    this.dataService.getData().subscribe(
      (d: any) => {
        this.datas = d.data;
      },
      (error) => {
        this.httperror = error;
        console.log(this.httperror);
      }
    );
  }

  // form submit function
  formSubmit() {
    if (!this.formData.valid) {
      this.required = 'Field is required';
      this.error = 'Form not valid';
    } else {
      this.error = '';
      this.required = '';
      console.log(this.formData.value);
    }
  }

  // Fullname error function
  getFullNameError() {
    return this.formData.get('fullName')?.hasError('required')
      ? 'Field is required'
      : this.formData.get('fullName')?.hasError('pattern')
      ? 'Please enter valid Name'
      : '';
  }

  // Email Error
  getEmailError() {
    return this.formData.get('email')?.hasError('required')
      ? 'Field is required'
      : this.formData.get('email')?.hasError('email')
      ? 'Please enter valid email'
      : '';
  }

  // Mobile error message
  getMobileError() {
    return this.formData.get('mobile')?.hasError('required')
      ? 'Field is required'
      : this.formData.get('mobile')?.hasError('pattern')
      ? 'Please enter valid mobile number'
      : '';
  }

  // Qualification error message
  getQualificationError() {
    return this.formData.get('qualification')?.hasError('required')
      ? 'Field is required'
      : '';
  }
}
