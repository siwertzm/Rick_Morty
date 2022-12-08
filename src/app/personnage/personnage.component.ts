import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {

  pers: any;
  nbrEp: any;
  episode: any;
  constructor(private Http: HttpClient){

  }

  ngOnInit(){
    this.getPers();
    this.getEpiosde();

  }

  getPers(){
    this.Http.get('https://rickandmortyapi.com/api/character').subscribe({
      next: (data) => { this.pers = data;},
      error: (err) => { console.log(err) }
    })
  }

  getEpiosde(){
    this.Http.get('http://localhost:8280/episode').subscribe({
      next: (data) => { this.episode = data;},
      error: (err) => { console.log(err) }
    })
  }

  recherchePerso(val: any){
    this.Http.get('https://rickandmortyapi.com/api/character/?name='+val).subscribe({
      next: (data)=> {this.pers = data},
      error: (err) => { console.log(err) }
    })

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
