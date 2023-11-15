import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Complex/login/login.component';
import { UnauthenticatedGuard } from './Guards/UnauthenticatedGuard';
import { RegisterComponent } from './Components/Complex/register/register.component';
import { AuthenticatedGuard } from './Guards/AuthenticatedGuard';
import { GymComponent } from './Components/Complex/gym/gym.component';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate : [UnauthenticatedGuard] },
  { path: 'Login', component: LoginComponent , canActivate:[UnauthenticatedGuard]},
  { path:'Register' , component:RegisterComponent , canActivate: [UnauthenticatedGuard]},
  { path:'Gym' , component:GymComponent , canActivate: [AuthenticatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
