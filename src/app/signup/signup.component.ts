import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
// import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,

  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const {email, password } = f.form.value;
    this.auth.signup(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/home');
    })
    .catch((err)=>{
      console.log(err.message);
    })
  }
}
