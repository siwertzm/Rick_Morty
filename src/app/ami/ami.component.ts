import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.css']
})
export class AmiComponent {

  demandeRec: any;
  demandeEnv: any;
  constructor(private route: Router, public authService: AuthService, private Http: HttpClient){

  }

  ngOnInit(){
    this.getAmiReceveur();
    this.getAmiEnvoyeru();
  }

  GoTo(){
    this.route.navigateByUrl('user');

  }

  getAmiReceveur(){
    this.Http.get('http://localhost:8280/demande/receveur/valide/'+ this.authService.getUserConnected().id).subscribe({
    next: (data)=> {this.demandeRec = data},
    error: (err)=> {console.log(err)}
    })
  }

  getAmiEnvoyeru(){
    this.Http.get('http://localhost:8280/demande/envoyeur/valide/'+ this.authService.getUserConnected().id).subscribe({
    next: (data)=> {this.demandeEnv = data},
    error: (err)=> {console.log(err)}
    })
  }

  acceptDemande(user: any, demande: any){
    let val = {};
    this.Http.patch('http://localhost:8280/demande/accept/'+ user + '/' + demande, val).subscribe({
      next: (data)=> {console.log(data)},
      error: (err)=> {console.log(err)}
    })
  }

  refuserDemande(val: any){
    this.Http.delete('http://localhost:8280/demande/reject/'+val).subscribe({
      next: (data)=> {console.log(data), location.reload()},
      error: (err)=> {console.log(err)}
    });

  }

}
