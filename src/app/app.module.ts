import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowPackagesComponent } from './components/show-packages/show-packages.component';
import { HomeComponent } from './components/home/home.component';
import {CustomFilterPipe} from "./custom-filter-pipe.pipe";
import { CustomPackagesComponent } from './components/custom-packages/custom-packages.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import {NgOptimizedImage} from "@angular/common";
import { CustomBookingsComponent } from './components/custom-bookings/custom-bookings.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowPackagesComponent,
    HomeComponent,
    CustomFilterPipe,
    CustomPackagesComponent,
    UserLoginComponent,
    UserRegisterComponent,
    BookingsComponent,
    CustomBookingsComponent,
    NavComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgOptimizedImage,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
