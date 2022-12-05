import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {

  episode: any;
  img: any;
  constructor(private Http: HttpClient){

  }

  ngOnInit(){
    this.getEp();
    this.getImg();
  }

  getEp(){
    this.Http.get('https://rickandmortyapi.com/api/episode').subscribe({
      next: (data) => { this.episode = data;},
      error: (err) => { console.log(err) }
    })
  }

  getImg(){
    this.Http.get('http://localhost:8280/img').subscribe({
      next: (data) => { this.img = data;},
      error: (err) => { console.log(err) }
    })
  }

}
