
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdmindashboardComponent } from './admin/admindashboard.component';
import { UserComponent } from './user/user.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourceService } from './resource/resource.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  PdfViewerModule  } from  'ng2-pdf-viewer';
import { LogoutComponent } from './logout/logout.component';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    AdmindashboardComponent,
    UserComponent,
    ResourceComponent,
    LogoutComponent,
    SafePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
