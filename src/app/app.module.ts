import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout"
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';




import { HomeComponent } from './home/home.component';
import { UserpageComponent } from './userpage/userpage.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { LoginComponent } from './auth/login/login.component';
import { GamemodalComponent } from './gamemodal/gamemodal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { Ng2Webstorage } from 'ngx-webstorage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent,
    GameDisplayComponent,
    LoginComponent,
    GamemodalComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    RegisterSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2Webstorage,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [],
  entryComponents: [GamemodalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
