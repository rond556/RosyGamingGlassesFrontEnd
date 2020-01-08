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
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/finalfantasyvi.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/guardianheroes.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/wakuwaku7.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/hyperlightdrifter.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/marvelvscapcom2.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/megaman2.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/megamanlegends.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/metalslug.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/monkeyisland.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/mrgimmick.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/popfulmail.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/rondoofblood.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/secretofmana.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/shovelknight.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/suikoden2.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/supermario64.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/supermariorpg.gif?raw=true',
'https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/loginscreengifs/supermetroid.gif?raw=true'
];


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

  this.currentBackground = this.images[Math.floor(Math.random() * this.images.length - 1)];
  console.log(this.currentBackground)
 }

 


}