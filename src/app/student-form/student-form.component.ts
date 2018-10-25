import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

class CustomValidator {
  static validator() {
    return function(control: FormControl) {
      const value = +control.value;

      if (value && value > 2017) {
        return {
          passYear: 'Year of passing must be 2017 or before'
        };
      }
      return null;
    };
  }
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  f: FormGroup;
  name: FormControl;
  lastName: FormControl;
  class: FormControl;
  passYear: FormControl;
  per: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+'),
      Validators.maxLength(20)
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+'),
      Validators.maxLength(20)
    ]);
    this.class = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9a-zA-Z]+')
    ]);
    this.passYear = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
      CustomValidator.validator()
    ]);
    this.per = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+')
    ]);
  }

  createForm() {
    this.f = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      class: this.class,
      passYear: this.passYear,
      per: this.per
    });
  }

}
