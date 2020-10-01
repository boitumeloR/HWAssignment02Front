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
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'addplayer',
    component: AddPlayerComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'updateplayer',
    component: UpdatePlayerComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'addplayer',
    component: AddPlayerComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'viewteam',
    component: ViewTeamComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'addteam',
    component: AddTeamComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'updateteam',
    component: UpdateTeamComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'viewleague',
    component: ViewLeagueComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'addleague',
    component: AddLeagueComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'updateleague',
    component: UpdateLeagueComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'viewusertype',
    component: ViewUserTypeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'addusertype',
    component: AddUserTypeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'updateusertype',
    component: UpdateUserTypeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'viewuser',
    component: ViewUserComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'updateuser',
    component: UpdateUserComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
