import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { 

  }


  signup(email:string,password:string){
    return this.auth.auth.createUserWithEmailAndPassword(email,password);
  }
  signin(email:string,password:string){
    return this.auth.auth.signInWithEmailAndPassword(email,password);
  }

  getUser(){
    return this.auth.authState;
  }

  signOut(){
    return this.auth.auth.signOut();
  }
}
