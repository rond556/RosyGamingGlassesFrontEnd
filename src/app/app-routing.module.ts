import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CustomageComponent } from './customage/customage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TenyearsoldComponent } from './tenyearsold/tenyearsold.component';
import { ElevenyearsoldComponent } from './elevenyearsold/elevenyearsold.component';
import { TwelveyearsoldComponent } from './twelveyearsold/twelveyearsold.component';
import { ThirteenyearsoldComponent } from './thirteenyearsold/thirteenyearsold.component';
import { FourteenyearsoldComponent } from './fourteenyearsold/fourteenyearsold.component';



const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'customage', component: CustomageComponent},
  { path: 'userpage', component: UserpageComponent},
  { path: 'tenyearsold', component: TenyearsoldComponent},
  { path: 'elevenyearsold', component: ElevenyearsoldComponent},
  { path: 'twelveyearsold', component: TwelveyearsoldComponent},
  { path: 'thirteenyearsold', component: ThirteenyearsoldComponent},
  { path: 'fourteenyearsold', component: FourteenyearsoldComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
