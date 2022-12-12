import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { range } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {

  episode: any;
  img: any;
  saison: any=1;
  constructor(private Http: HttpClient, public authService: AuthService) {

  }

  ngOnInit() {
    this.getEp(this.saison);
    this.getImg();
  }


  getEp(val: any) {

    this.Http.get('https://rickandmortyapi.com/api/episode/?episode=S0'+val).subscribe({
      next: (data) => { this.episode = data;},
      error: (err) => { console.log(err) }
    })
  }

  getImg() {
    this.Http.get('http://localhost:8280/img').subscribe({
      next: (data) => { this.img = data; },
      error: (err) => { console.log(err) }
    })
  }

  rechercheEpisode(val: any) {
    if (val != '') {
      this.Http.get('https://rickandmortyapi.com/api/episode/?name=' + val).subscribe({
        next: (data) => { this.episode = data },
        error: (err) => { console.log(err) }
      })
    } else {
      this.Http.get('https://rickandmortyapi.com/api/episode/?episode=S01').subscribe({
        next: (data) => { this.episode = data; console.log(this.episode); },
        error: (err) => { console.log(err) }
      })
    }
  }

  changerSaison(val: any){
    this.saison = val;
    this.getEp(this.saison);
  }

  gestionEpisode(sub: string){
    let res = sub.split("/", 100);
    return res;
  }

  convertStringNumber(val: any){
    var num = Number(val);
    return num;
  }
  

}

