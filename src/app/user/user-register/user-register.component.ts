import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/Services/user-service.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.createRegistratoinForm();
  }

  createRegistratoinForm() {
    this.registrationForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    }, { Validators: this.passwordMatchingValidator })
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  //Getter method for all form control
  get userName() {
    return this.registrationForm.get('userName') as FormControl
  }

  get email() {
    return this.registrationForm.get('email') as FormControl
  }

  get password() {
    return this.registrationForm.get('password') as FormControl
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value)
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      alertify.success("Congrats.. you are successfully registered");
    } else {
      alertify.error("Kindly provide required field ");
    }
  }
}
