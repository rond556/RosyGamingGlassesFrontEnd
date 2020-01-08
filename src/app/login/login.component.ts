import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  images: string[] = ['https://66.media.tumblr.com/35db5c6171e2719e50dc5d7a463b9080/tumblr_nlf3znNNzk1qd4q8ao1_400.gifv',
  'https://media0.giphy.com/media/yiQFNwgSBg7As/giphy.gif',
  'https://thumbs.gfycat.com/GreatRadiantAfricanharrierhawk-small.gif',
    'https://media.giphy.com/media/ffg29DALNz0Pe/giphy.gif',
  'https://i.pinimg.com/originals/30/82/64/30826422f487abb4b550ffdb1a0403ee.gif'];


  currentBackground = this.images[Math.floor(Math.random() * this.images.length)];

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }


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

  this.currentBackground = this.images[Math.floor(Math.random() * this.images.length)];
  
 }

 


}