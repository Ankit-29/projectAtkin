import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { Router } from '@angular/router';
import { MessageTypes } from 'src/app/models/enums';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private utilityService: UtilityService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cPassword: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  signUp() {
    if (this.signUpForm.value.password !== this.signUpForm.value.cPassword) {
      this.utilityService.showMessage('Password doesnot Match', MessageTypes.Error);
    }
    this.authService.signUp(this.signUpForm.value).subscribe((data: { message: string; }) => {
      // this.utilityService.showMessage(data.message, MessageTypes.Success);
      this.utilityService.showMessage('Signed Up Successfully', MessageTypes.Success);
      this.initLoginForm();
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

}
