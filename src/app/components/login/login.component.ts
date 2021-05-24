import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private _snackbar: MatSnackBar,
    private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      let obj = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.userservice.loginToFundoo(obj).subscribe((resp: any) => {
        // localStorage.setItem('id', resp.userId);
        localStorage.setItem('token', resp.id);
        this.router.navigate(['home']);
      }, (httperror: HttpErrorResponse) => {
        if (httperror.error.error.statusCode === 401) {
          console.log("Login failed");
          let snackbar = this._snackbar.open(httperror.error.error.message, 'Retry');
          snackbar.afterDismissed().subscribe(() => {
            this.form.reset();
          })
        }
        else
          console.log(httperror);
      })
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
