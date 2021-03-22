import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  email=null;

  constructor(
    private auth:AuthService,
    private router:Router,) {
      auth.getUser().subscribe((user)=>{
        this.email= user!.email;
      })
    }

  ngOnInit() {}


  async handleSignOut(){
    try {
      const res=await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      console.log('Login to continue');
      this.email= null
    } catch (error) {
      console.log('something is worng')
    }
  }
}
