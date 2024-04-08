import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './Users/users-home/users-home.component';
import { UsersRegisterComponent } from './Users/users-register/users-register.component';
import { UsersLoginComponent } from './Users/users-login/users-login.component';
import { UsersProfileComponent } from './Users/users-profile/users-profile.component';
import { UsersPricingPlansComponent } from './Users/users-pricing-plans/users-pricing-plans.component';


const routes: Routes = [
  { path: '', component: UsersHomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: 'UsersRegister', component: UsersRegisterComponent },
  { path: 'UsersLogin', component: UsersLoginComponent },
  { path: 'UsersProfile', component: UsersProfileComponent },
  { path: 'PricingPlans', component: UsersPricingPlansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
