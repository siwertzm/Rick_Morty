import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  user: any;
  msg: any;
  isConnected = false;

  constructor(private Http: HttpClient, private authService: AuthService, private route: Router){

  }

  Connexion(val: any){
    this.msg='';
    this.Http.post('http://localhost:8280/login',val).subscribe({
      next: (data)=> {this.user = data;
        if(this.user != null){
          this.authService.setUserSession(this.user);
          this.route.navigateByUrl('');
          this.isConnected = true;
        } else{
          this.msg = 'Identifiant ou mot de passe incorrect'
        }
      },
      error: (err)=> {console.log(err)}
      
    });
  }

}
