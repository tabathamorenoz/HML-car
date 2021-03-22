import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

import { ApiService } from './core/api.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeekStatusComponent } from './weekstatus/weekstatus.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    WeekStatusComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    // Routes
    RouterModule.forRoot([
      { 
        path: '',
        component: SignupComponent
      },
      { 
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      { 
        path: 'signup',
        component: SignupComponent
      },
      { 
        path: 'details',
        component: DetailsComponent
      },
      { 
        path: 'details/:location/:start_date',
        component: DetailsComponent
      }
    ], { useHash: false })
  ],

  providers: [
    ApiService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
