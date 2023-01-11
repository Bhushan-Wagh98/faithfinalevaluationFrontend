import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error = '';
  isSubmitted: boolean = false;
  response: any;

  constructor(
    public formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.loginService.isLogged) {
      location.href = 'visittable';
    }

    this.loginForm = this.formBuilder.group({
      // email
      username: [
        '',
        [Validators.email, Validators.required, Validators.minLength],
      ],

      // password
      password: ['', Validators.required],
    });
  }

  // get all controls from loginform

  get formControl() {
    return this.loginForm.controls;
  }

  // submit login form
  loginCredential(): void {
    // validation
    this.isSubmitted = true;
    console.log(this.loginForm.value);

    // Invalid form
    if (this.loginForm.invalid) return;

    // valid loginform
    // check emailId and Password --> call service
    if (this.loginForm.valid) {
      this.loginService.loginVerify(this.loginForm.value).subscribe((res) => {
        console.log(res);

        this.error = '';
        this.response = res;
        this.loginService.isLogged = true;

        // session manaement --> local storage
        localStorage.setItem('USER', JSON.stringify(this.response));

        location.href = 'visittable';
      }),
        (error) => {
          console.log(error);
          this.error = 'Invalid emaiId / password!';
        };
    }
  }
}
