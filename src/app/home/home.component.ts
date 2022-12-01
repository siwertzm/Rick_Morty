import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pers1: any;
  pers2: any;
  pers3: any;
  pers4: any;
  constructor(private Http: HttpClient) {

  }

  ngOnInit() {
    this.getPersonnage1();
    this.getPersonnage2();
    this.getPersonnage3();
    this.getPersonnage4();
  }

  getRandomInt(max:any){
    return Math.floor(Math.random()*max);
  }

  getPersonnage1() {
    var num = this.getRandomInt(826) + 1;
    this.Http.get('https://rickandmortyapi.com/api/character/'+ num).subscribe({
      next: (data) => { this.pers1 = data;},
      error: (err) => { console.log(err) }
    });
  }
  getPersonnage2() {
    var num = this.getRandomInt(826) + 1;
    this.Http.get('https://rickandmortyapi.com/api/character/'+ num).subscribe({
      next: (data) => { this.pers2 = data;},
      error: (err) => { console.log(err) }
    });
  }
  getPersonnage3() {
    var num = this.getRandomInt(826) + 1;
    this.Http.get('https://rickandmortyapi.com/api/character/'+ num).subscribe({
      next: (data) => { this.pers3 = data;},
      error: (err) => { console.log(err) }
    });
  }
  getPersonnage4() {
    var num = this.getRandomInt(826) + 1;
    this.Http.get('https://rickandmortyapi.com/api/character/'+ num).subscribe({
      next: (data) => { this.pers4 = data;},
      error: (err) => { console.log(err) }
    });
  }
}
