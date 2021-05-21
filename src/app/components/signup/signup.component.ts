import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/userService/user.service';

const NAME_REGEX = new RegExp('[A-Z]{1}[a-z]{2,}');
const PASSWORD_REGEX = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}');

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  matchingError: boolean = false;
  form: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private userservice: UserService) {
    this.form = this.formbuilder.group({
      firstname: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
      lastname: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.mustMatchPassword() });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      let objReq = {
        firstName: this.form.value.firstname,
        lastName: this.form.value.lastname,
        email: this.form.value.email,
        password: this.form.value.password,
        service: "advance"
      }
      console.log(objReq);
      this.userservice.registerUser(objReq).subscribe((resp: any) => {
        console.log(resp);
      }, (error) => {
        console.log(error);
      })
    }
  }

  get firstname() {
    return this.form.get('firstname');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  mustMatchPassword() {
    return (formgroup: FormGroup) => {
      const control = formgroup.controls['password'];
      const matchingControl = formgroup.controls['confirmPassword'];
      if (matchingControl.errors && !matchingControl.errors?.mustMatch)
        return
      if (matchingControl.value !== control.value)
        matchingControl.setErrors({ mustMatch: true });
      else
        matchingControl.setErrors(null);
    }
  }
}
