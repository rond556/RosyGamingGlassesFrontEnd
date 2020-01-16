import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Profile } from 'src/models/profile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    birthyear: new FormControl('')
  })
  profile: Profile;

  constructor(private profileService: ProfileService) { 

  }

  ngOnInit() {
  }

  register(){
    this.profile = new Profile(
      this.registrationForm.value.username, this.registrationForm.value.password, this.registrationForm.value.birthyear);
    this.profileService.register(this.profile);
  }


}
