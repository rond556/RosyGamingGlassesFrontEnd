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
  images: string[] = ['https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/bioniccommando.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/chronotrigger.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/demonscrest.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/finalfantasyvi.gif?raw=true',,
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/guardianheroes.gif?raw=true'];


  currentBackground = this.images[Math.floor(Math.random() * this.images.length - 1)];

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