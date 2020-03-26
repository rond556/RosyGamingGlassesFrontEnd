import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { LoginComponent } from './auth/login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';




const routes: Routes = [ 
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'game-display', component: GameDisplayComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserpageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-success', component: RegisterSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
