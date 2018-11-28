import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

import { UserService } from './_service/user.service';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { MapComponent } from './map/map.component';
import { MapGuard } from './_guard/map.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, MapGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }