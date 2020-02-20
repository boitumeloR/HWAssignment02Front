import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { AdminGuard } from './guards/admin.guard';
import { AddTeamComponent } from './add-team/add-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { ViewLeagueComponent } from './view-league/view-league.component';
import { AddLeagueComponent } from './add-league/add-league.component';
import { UpdateLeagueComponent } from './update-league/update-league.component';
import { ViewUserTypeComponent } from './view-user-type/view-user-type.component';
import { AddUserTypeComponent } from './add-user-type/add-user-type.component';
import { UpdateUserTypeComponent } from './update-user-type/update-user-type.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addplayer',
    component: AddPlayerComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'updateplayer',
    component: UpdatePlayerComponent
  },
  {
    path: 'addplayer',
    component: AddPlayerComponent
  },
  {
    path: 'viewteam',
    component: ViewTeamComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'addteam',
    component: AddTeamComponent
  },
  {
    path: 'updateteam',
    component: UpdateTeamComponent
  },
  {
    path: 'viewleague',
    component: ViewLeagueComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'addleague',
    component: AddLeagueComponent
  },
  {
    path: 'updateleague',
    component: UpdateLeagueComponent
  },
  {
    path: 'viewusertype',
    component: ViewUserTypeComponent
  },
  {
    path: 'addusertype',
    component: AddUserTypeComponent
  },
  {
    path: 'updateusertype',
    component: UpdateUserTypeComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'viewuser',
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
