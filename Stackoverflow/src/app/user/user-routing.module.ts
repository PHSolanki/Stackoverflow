import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

{path: 'login' , component:LoginComponent ,canActivate:[AuthGuard]},
{path: 'signup' , component:SignUpComponent ,canActivate:[AuthGuard]},
{path: 'user-profile' , component:UserProfileComponent , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
