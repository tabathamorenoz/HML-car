import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../app/core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor(  public authenticationService: AuthService,
    private router:Router,) { }

  ngOnInit() {
  }


  onSubmit(f: NgForm){
    const {email, password } = f.form.value;
    this.authenticationService.signin(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/home');
      console.log('pass');
      
    })
    .catch((err)=>{
      console.log(err.message);
      console.log('error');
    })
  }

}
