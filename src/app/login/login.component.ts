import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginScreenGifs } from 'src/models/loginscreengifs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  images;

  currentBackground = this.images[Math.floor(Math.random() * this.images.length)];

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private loginGifs: LoginScreenGifs ) {
   this.images = loginGifs.getGifArray;
   }



  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    setInterval(() => { this.changeImage() }, 4000);
}

get formControls() { return this.loginForm.controls; }

login(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
  this.authService.login(this.loginForm.value);
  this.router.navigateByUrl('/home');
}

changeImage() {
  this.currentBackground = 'https://media.giphy.com/media/' + this.images[Math.floor(Math.random() * this.images.length)];
 }
}