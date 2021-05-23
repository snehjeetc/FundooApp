import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './components/signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { DisplayComponent } from './components/display/display.component';
import { MatCardModule } from '@angular/material/card';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TakenoteComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    ClickOutsideModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
