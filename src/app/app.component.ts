import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  constructor(private Http: HttpClient) {

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
}
