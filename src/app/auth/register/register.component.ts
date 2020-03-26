import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: ['', [Validators.required]],
      confirmPassword: ''
    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    this.registerPayload.username = this.registerForm.get("username").value;
    this.registerPayload.email = this.registerForm.get("email").value;
    this.registerPayload.password = this.registerForm.get("password").value;
    this.registerPayload.confirmPassword = this.registerForm.get("confirmPassword").value;

    if(this.registerPayload.password == this.registerPayload.confirmPassword){
      this.authService.register(this.registerPayload).subscribe(data => {
        console.log("Register success");
        this.router.navigateByUrl("/register-success");
        error =>
        console.log("Register failed");
      });
    } else {
    console.log("Passwords do not match");
    }
  }

}
