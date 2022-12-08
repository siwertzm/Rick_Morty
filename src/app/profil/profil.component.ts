import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  user: any;
  msg: any;

  constructor(private Http: HttpClient, public authService: AuthService, private route: Router){

  }

  ngOnInit(){

  }

  updateUser(val: any){
    this.msg = '';
    let localUser: any = localStorage.getItem('userConnected');
    val.id = JSON.parse(localUser).id;

    if (val.nom == ''){
      val.nom = JSON.parse(localUser).nom;
    }
    if (val.prenom == ''){
      val.prenom = JSON.parse(localUser).prenom;
    }
    if (val.login == ''){
      val.login = JSON.parse(localUser).login;
    }
    if (val.mdp == ''){
      val.mdp = JSON.parse(localUser).mdp;
    }
    if (val.ville == ''){
      val.ville = JSON.parse(localUser).ville;
    }

    this.Http.put<any>('http://localhost:8280/user/update/'+this.authService.getUserConnected().id, val).subscribe({
      next: (data)=> {this.user = data;
      if (this.user != null){
        this.authService.setUserSession(val);
        this.route.navigateByUrl('profil');
        location.reload();
      }else{
        this.msg='Information incorrect'
      }
      },
      error: (err)=> {console.log(err)}
    })
  }

  reload(){
    location.reload();
  }

}
