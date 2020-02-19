import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { from } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import {MatSelectModule} from '@angular/material/select';
import {CookieService} from 'ngx-cookie-service';
import { ViewTeamComponent } from './view-team/view-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { ViewLeagueComponent } from './view-league/view-league.component';
import { AddLeagueComponent } from './add-league/add-league.component';
import { UpdateLeagueComponent } from './update-league/update-league.component';
import { ViewUserTypeComponent } from './view-user-type/view-user-type.component';
import { AddUserTypeComponent } from './add-user-type/add-user-type.component';
import { UpdateUserTypeComponent } from './update-user-type/update-user-type.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddPlayerComponent,
    UpdatePlayerComponent,
    ViewTeamComponent,
    AddTeamComponent,
    UpdateTeamComponent,
    ViewLeagueComponent,
    AddLeagueComponent,
    UpdateLeagueComponent,
    ViewUserTypeComponent,
    AddUserTypeComponent,
    UpdateUserTypeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    CdkTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ] ,
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
