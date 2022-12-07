import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  setUserSession(user:any){
    localStorage.setItem('userConnected', JSON.stringify(user));
  }

  getUserConnected(){
    let user:any = localStorage.getItem('userConnected');
    return JSON.parse(user);
  }

  isConnected(){
    if(this.getUserConnected() != null){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.clear();
    this.route.navigateByUrl('');
  }

  hiddenPassword(){
    let password: any = this.getUserConnected().mdp;
    let hiddenPass: any = "";
    for (let i=0; i<password.length; i++){
      hiddenPass = hiddenPass + "*"
    }
    return hiddenPass;
  }
}
