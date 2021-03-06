import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Signup } from './signup';
import { SignupService } from './signup.service';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { ResourceService } from '../resource/resource.service';
import { User } from '../admin/admin';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  
  public user!: User;
  code!: string;
  email!: string;
  public verified!: Boolean;
  public sent!: Boolean;
  constructor(private resourceService: ResourceService,private signupService: SignupService,
    private router: Router) { }

  
  ngOnInit(): void {
  }
  
  public getUser(): void {
    this.resourceService.getUser().subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        this.router.navigate(['/login']);
      }
    );
  }

  public sendVerification(): void {
    this.signupService.sendVerification(this.email).subscribe(
      (response: Boolean) => {
        if(response){
          alert("Verification code sent Successfully")
          this.sent =true;
        }
        else{
          alert("Email-Id already exists/invalid!");
        }
        
      },
      (error: HttpErrorResponse) => {
        alert("Email-Id already exists/invalid!");
      }
    );
  }

  public checkVerification(): void {
    this.signupService.checkVerification(this.code).subscribe(
      (response: Boolean) => {
        if(response){
          this.verified = true;
          alert("E-Mail Verification Successfull")
        }
        else{
          alert("E-Mail Verification UnSuccessfull")
        }
        
      },
      (error: HttpErrorResponse) => {
        alert("E-Mail Verification UnSuccessfull");
      }
    );
  }

  //add resource form
  public onAddUser(addForm: NgForm): void{
    document.getElementById('add-signup-form')?.click(); 
    this.signupService.addUser(addForm.value).subscribe(
      (response: Signup) => {
        addForm.reset();
        this.getUser();
        setTimeout(() => {if((this.user.password === '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918') && (this.user.email === 'admin@email.com')){
          this.router.navigate(['/admindashboard']);
        }
        else{
          this.router.navigate(['/resource']);
        }
      }, 500)},
      (error: HttpErrorResponse) => {
        alert("User E-mail already exists!");
        addForm.reset();
      }
    );
  }

}

