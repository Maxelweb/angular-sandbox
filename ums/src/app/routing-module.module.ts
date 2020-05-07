import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './route-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RouterModule, Routes } from '@angular/router';


// ng g m routing-module --flat 

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent, 
    canActivate: [ RouteGuardService ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
    canActivate: [ RouteGuardService ]
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate: [ RouteGuardService ]
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate: [ RouteGuardService ]
  },
  {
    path: 'users/:id',
    component: UserDataComponent,
    canActivate: [ RouteGuardService ]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModuleModule { }
