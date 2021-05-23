import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TakenoteComponent } from './components/takenote/takenote.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "notes", pathMatch: "full" },
      { path: "takenote", component: TakenoteComponent },
      { path: "notes", component: DisplayComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
