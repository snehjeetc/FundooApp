import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  error = true;
  errorMessage = "Wrong Password"
  form: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      password: ['']
    })
  }

  ngOnInit(): void {
  }

}
