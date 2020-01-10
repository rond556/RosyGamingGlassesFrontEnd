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
  'https://media.giphy.com/media/DpXqHdILXRRDi/giphy.gif',
  'https://media.giphy.com/media/i5dDJz6oQHFD2/giphy.gif',
  'https://media.giphy.com/media/h7U5kvQ7Lwzok/giphy.gif',
  'https://media.giphy.com/media/98STDd3SLagaQ/giphy.gif',
  'https://media.giphy.com/media/TtWC9oazPXiOA/giphy.gif',
  'https://media.giphy.com/media/hldSOLuYpBKus/giphy.gif',
  'https://media.giphy.com/media/EHbUWNDChZBw4/giphy.gif',
  'https://media.giphy.com/media/nhl3WoySrHVRK/giphy.gif',
  'https://media.giphy.com/media/a6e24oTqeSjcs/giphy.gif',
  'https://media.giphy.com/media/D1iDxmIGxUnzq/giphy.gif',
  'https://media.giphy.com/media/vmZ11AetEXR6M/giphy.gif',
  'https://media.giphy.com/media/1dTuqX7kVCwdW/giphy.gif',
  'https://media.giphy.com/media/5yUO10BpJ5JLy/giphy.gif',
  'https://media.giphy.com/media/jplF48QI3L3Ec/giphy.gif',
  'https://media.giphy.com/media/xUNd9IjAp7XhuwHRao/giphy.gif',
  'https://media.giphy.com/media/txcIHRNl2vcDm/giphy.gif',
  'https://media.giphy.com/media/asRx7MPFS0SBO/giphy.gif',
  'https://media.giphy.com/media/6UDorPg1oGRQ4/giphy.gif',
  'https://media.giphy.com/media/yiBt9PZKrwg0g/giphy.gif',
  'https://media.giphy.com/media/jneiA7ImMXF6/giphy.gif',
  'https://media.giphy.com/media/3o6EQaAxwqYByiZXIQ/giphy.gif'];

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