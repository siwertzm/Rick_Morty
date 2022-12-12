import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { PersoServiceService } from '../perso-service.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {

  pers: any;
  nbrEp: any;
  episode: any;
  constructor(private Http: HttpClient, public authService: AuthService, public persoService: PersoServiceService){

  }

  ngOnInit(){
    this.getPers();
    this.getEpiosde();

  }

  getPers(){
      this.Http.get('https://rickandmortyapi.com/api/character/?page=1').subscribe({
      next: (data) => { this.pers = data ;},
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

  addFavPerso(){
    let fav = {user: this.authService.getUserConnected(), recette: this.persoService.getPerso()}
    this.Http.post('http://localhost:8280/favori/perso',fav).subscribe({
      next: (data)=> {console.log(data)},
      error: (err)=> {console.log(err)}
    })
  }

  savePerso(val: any){
    this.persoService.setPerso(val);
    var test = this.persoService.getPerso();
    console.log(test)
  }

  test(val:any){
    console.log(val);
  }



}
