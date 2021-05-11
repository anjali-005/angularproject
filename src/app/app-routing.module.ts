import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsbcComponent } from './hsbc/hsbc.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path:"",component:HsbcComponent},
 {path:"hsbc",component:HsbcComponent},
 { path:"login",component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
