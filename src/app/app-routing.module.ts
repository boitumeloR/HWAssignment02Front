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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
