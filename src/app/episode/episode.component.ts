import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {

  episodeDetail: any;
  episode: any;
  img: any;
  nom:any;
  constructor(private Http: HttpClient){

  }

  ngOnInit(){
    this.getEpisode();
    this.getEp();
    this.getImg();
  }

  getEp(){

    this.Http.get('https://rickandmortyapi.com/api/episode?page='+ 1).subscribe({
      next: (data) => { this.episode = data; console.log(this.episode);},
      error: (err) => { console.log(err) }
    })
  }

  getEpisode(){
    this.Http.get('http://localhost:8280/episode').subscribe({
      next: (data) => { this.episodeDetail = data;},
      error: (err) => { console.log(err) }
    })
  }

  

  getImg(){
    this.Http.get('http://localhost:8280/img').subscribe({
      next: (data) => { this.img = data;},
      error: (err) => { console.log(err) }
    })
  }

  FindNom(val:any){
    this.Http.get(val).subscribe({
      next: (data) => { this.nom = data;},
      error: (err) => { console.log(err) }
    })
    return this.nom.name;
  }

}
