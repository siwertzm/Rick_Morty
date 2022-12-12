import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: any;
  constructor(private Http: HttpClient, public authService: AuthService){

  }

  ngOnInit(){
    this.getUser();

  }

  getUser(){
    this.Http.get('http://localhost:8280/user').subscribe({
      next: (data)=> {this.user = data},
      error: (err)=> {console.log(err)}
    });
  }

  addAmi(val: any){
    let demande = { envoyeur: this.authService.getUserConnected(), receveur: val};
    if (val.id != this.authService.getUserConnected().id){
      this.Http.post('http://localhost:8280/demande', demande).subscribe({
      next: (data)=> {console.log(data)},
      error: (err)=> {console.log(err)}
    })
    }
  }

  recherchePerso(val: any) {
    if (val != '') {
      this.Http.get('http://localhost:8280/user/nom/' + val).subscribe({
        next: (data) => { this.user = data },
        error: (err) => { console.log(err) }
      })
    } else {
      this.Http.get('http://localhost:8280/user').subscribe({
        next: (data) => { this.user = data; },
        error: (err) => { console.log(err) }
      })
    }
  }



}
