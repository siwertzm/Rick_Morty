import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {

  demande: any;
  demandeAtt: any;
  constructor(private route: Router, public authService: AuthService, private Http: HttpClient){

  }

  ngOnInit(){
    this.getDemande();
    this.getDemandeAtt();
  }

  GoTo(){
    this.route.navigateByUrl('user');

  }

  getDemande(){
    this.Http.get('http://localhost:8280/demande/nonvalide/'+ this.authService.getUserConnected().id).subscribe({
    next: (data)=> {this.demande = data},
    error: (err)=> {console.log(err)}
    })
  }

  getDemandeAtt(){
    this.Http.get('http://localhost:8280/demande/envoyeur/nonvalide/'+ this.authService.getUserConnected().id).subscribe({
    next: (data)=> {this.demandeAtt = data},
    error: (err)=> {console.log(err)}
    })
  }

  acceptDemande(user: any, demande: any){
    let val = {};
    this.Http.patch('http://localhost:8280/demande/accept/'+ user + '/' + demande, val).subscribe({
      next: (data)=> {console.log(data), location.reload()},
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
