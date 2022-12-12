import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { range } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {

  nom: any = [];
  episode: any;
  img: any;
  saison: any = 1;
  pers: any;

  constructor(private Http: HttpClient, public authService: AuthService) {

  }

  ngOnInit() {
    this.getEp(this.saison);
    this.getImg();
  }


  getEp(val: any) {

    this.Http.get('https://rickandmortyapi.com/api/episode/?episode=S0' + val).subscribe({
      next: (data) => { this.episode = data; },
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

  changerSaison(val: any) {
    this.saison = val;
    this.getEp(this.saison);
  }

  gestionEpisode(sub: string) {
    let res = sub.split("/", 100);
    return res;
  }

  convertStringNumber(val: any) {
    var num = Number(val);
    return num;
  }

  getNom(val: any) {
    this.Http.get('https://rickandmortyapi.com/api/character/' + val).subscribe({
      next: (data) => { this.pers = data; this.nom = this.pers.name },
      error: (err) => { console.log(err) }
    });
    return this.nom;
  }

  getNames(chars: any) {
    const arrayName: any = [];

    for (let i: number = 0; i < chars.length; i++) {
      arrayName.push(chars[i].split("/").at(-1))
    }

    // const customUrl: string = 'https://rickandmortyapi.com/api/character/' + arrayName.join(",")

    // this.Http.get(customUrl).subscribe({
    //   next: (data)=>{console.log(data)},
    //   error: (err)=>{console.log(err)}
    // })

    // this.Http.get('https://rickandmortyapi.com/api/character/' + arrayName.join(",")).subscribe({
    //   next: (data) => {
    //     const tempData: any = data;
    //     const result: any = []; for (let j: number = 0; j < tempData.length; j++) {
    //       result.push(tempData[j].name);
    //     }
    //     console.log(result);
    //   },
    //   error: (err) => { console.log(err) }
    // });

    console.log(arrayName)
  }

  test(val:any){
    console.log(val);
  }
}

