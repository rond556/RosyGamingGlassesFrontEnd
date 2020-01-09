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
  images: string[] = ['https://media.giphy.com/media/AuIu79zI80VVe/giphy.gif',
'https://media.giphy.com/media/BrV5mGUrn5Li/giphy.gif',
'https://media.giphy.com/media/kCug4YeBhzxrq/giphy.gif',
'https://media.giphy.com/media/10H2lNJsW1lOHC/giphy.gif',
'https://media.giphy.com/media/yiQFNwgSBg7As/giphy.gif',
'https://media.giphy.com/media/TSKCDXGSBDJks/giphy.gif',
'https://media.giphy.com/media/RRef9mlH6YiKQ/giphy.gif',
'https://media.giphy.com/media/BS5dtZMwxWRTq/giphy.gif',
'https://media.giphy.com/media/AO5qaphTxRnyw/giphy.gif',
'https://media.giphy.com/media/1ZuJaGQR7sGc9zL8Hh/giphy.gif',
'https://media.giphy.com/media/zF9gqOiTb95bW/giphy.gif',
'https://media.giphy.com/media/xRNpHfgk9OeUU/giphy.gif',
'https://media.giphy.com/media/qzDJ06BW5OQCY/giphy.gif',
'https://media.giphy.com/media/jFYBRC7NzGrNS/giphy.gif',
'https://media.giphy.com/media/eRfpAFGHAfcXu/giphy.gif',
'https://media.giphy.com/media/REgFJcnd2n21O/giphy.gif',
'https://media.giphy.com/media/DpXqHdILXRRDi/giphy.gif']

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
  console.log(this.currentBackground)
 }

 


}