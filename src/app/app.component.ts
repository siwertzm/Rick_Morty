import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick_morty_front';

  nbrPers: any;
  nbrEp: any;
  nbrLieu: any;
  url: any;

  constructor(private Http: HttpClient, public authService: AuthService) {

  }

  ngOnInit() {
    this.getNbrEp();
    this.getNbrLieu();
    this.getNbrPers();
  }

  getNbrPers(){
    this.Http.get('https://rickandmortyapi.com/api/character').subscribe({
      next: (data) => { this.nbrPers = data;},
      error: (err) => { console.log(err) }
    })
  }

  getNbrEp(){
    this.Http.get('https://rickandmortyapi.com/api/episode').subscribe({
      next: (data) => { this.nbrEp = data;},
      error: (err) => { console.log(err) }
    })
  }

  getNbrLieu(){
    this.Http.get('https://rickandmortyapi.com/api/location').subscribe({
      next: (data) => { this.nbrLieu = data;},
      error: (err) => { console.log(err) }
    })
  }

  urlConnected(){
    if (this.authService.isConnected()){
      this.url="episode";
    }else{
      this.url='login';
    }
    return this.url;
  }


}
