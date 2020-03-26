import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { LoginScreenGifs } from 'src/models/loginscreengifs';
import { LoginPayload } from '../loginPayload';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginPayload: LoginPayload;
  isSubmitted  =  false;
  loginGifs: LoginScreenGifs;
  images = ['AuIu79zI80VVe/giphy.gif',
  'BrV5mGUrn5Li/giphy.gif',
  'kCug4YeBhzxrq/giphy.gif',
  '10H2lNJsW1lOHC/giphy.gif',
  'yiQFNwgSBg7As/giphy.gif',
  'TSKCDXGSBDJks/giphy.gif',
  'RRef9mlH6YiKQ/giphy.gif',
  'BS5dtZMwxWRTq/giphy.gif',
  'AO5qaphTxRnyw/giphy.gif',
  '1ZuJaGQR7sGc9zL8Hh/giphy.gif',
  'zF9gqOiTb95bW/giphy.gif',
  'xRNpHfgk9OeUU/giphy.gif',
  'qzDJ06BW5OQCY/giphy.gif',
  'jFYBRC7NzGrNS/giphy.gif',
  'eRfpAFGHAfcXu/giphy.gif',
  'REgFJcnd2n21O/giphy.gif',
  'DpXqHdILXRRDi/giphy.gif',
  'i5dDJz6oQHFD2/giphy.gif',
  'h7U5kvQ7Lwzok/giphy.gif',
  '98STDd3SLagaQ/giphy.gif',
  'TtWC9oazPXiOA/giphy.gif',
  'hldSOLuYpBKus/giphy.gif',
  'EHbUWNDChZBw4/giphy.gif',
  'nhl3WoySrHVRK/giphy.gif',
  'a6e24oTqeSjcs/giphy.gif',
  'D1iDxmIGxUnzq/giphy.gif',
  'vmZ11AetEXR6M/giphy.gif',
  '1dTuqX7kVCwdW/giphy.gif',
  '5yUO10BpJ5JLy/giphy.gif',
  'jplF48QI3L3Ec/giphy.gif',
  'xUNd9IjAp7XhuwHRao/giphy.gif',
  'txcIHRNl2vcDm/giphy.gif',
  'asRx7MPFS0SBO/giphy.gif',
  '6UDorPg1oGRQ4/giphy.gif',
  'yiBt9PZKrwg0g/giphy.gif',
  'jneiA7ImMXF6/giphy.gif',
  '3o6EQaAxwqYByiZXIQ/giphy.gif',
  '1vZ6QcjgF2iARTj4BE/giphy.gif',
  'pcKpMur7aAYMCs7WQX/giphy.gif',
  'f4JcszAA6d0c39QeUC/giphy.gif',
  'slvREYowfwgo0/giphy.gif',
  'CYFzxzmE2oDkI/giphy.gif',
  'l11R93B7B4CCA/giphy.gif',
  'qQXemeHr5Espi/giphy.gif',
  'p2QvsVKmM97sA/giphy.gif',
  'hcqQpHT2uya8o/giphy.gif',
  'tJ3F5KvJX7Ak0/giphy.gif',
  'cAEGKWfKe1urC/giphy.gif',
  'nRZe9xGWNvZC/giphy.gif',
  '4YIgzZz1EJtdK/giphy.gif'];

  currentBackground = this.images[Math.floor(Math.random() * this.images.length)];

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm  =  new FormGroup({
      username: new FormControl,
      password: new FormControl
  });
    this.loginPayload = {
      username: '',
      password: ''
    }
  }

ngOnInit() {
    setInterval(() => { this.changeImage() }, 4000);
}

get formControls() { return this.loginForm.controls; }

onSubmit(){
  this.loginPayload.username = this.loginForm.get("username").value;
  this.loginPayload.password = this.loginForm.get("password").value;
  this.authService.login(this.loginPayload).subscribe(data => {
    if(data){
      console.log("Login Success")
    } else {
      console.log("Login Failed")
    }
  })
  this.router.navigateByUrl('/home');
}

changeImage() {
  this.currentBackground = 'https://media.giphy.com/media/' + this.images[Math.floor(Math.random() * this.images.length)];
 }
}