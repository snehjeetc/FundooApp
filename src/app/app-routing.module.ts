import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { GetAllTrashComponent } from './components/get-all-trash/get-all-trash.component';
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
      { path: "notes", component: GetAllNotesComponent },
      { path: "trash", component: GetAllTrashComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
