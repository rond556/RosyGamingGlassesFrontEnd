import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  birthyear: number;
  
  constructor(private authService: AuthService, private forms: FormsModule, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

  storeBirthyear(year: number){
    this.authService.setBirthyear(year);
  }
}