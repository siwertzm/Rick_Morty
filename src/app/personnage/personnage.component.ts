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
  constructor(private Http: HttpClient){

  }

  ngOnInit(){
    this.getPers();

  }

  getPers(){
    this.Http.get('https://rickandmortyapi.com/api/character').subscribe({
      next: (data) => { this.pers = data;},
      error: (err) => { console.log(err) }
    })
  }

}
