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
  location: any;
  url: any;
  constructor(private Http: HttpClient) {

  }

  ngOnInit() {
    this.nameLocation();
    this.getPersonnage2();

  }

  nameLocation(){
    const pers = this.Http.get('https://rickandmortyapi.com/api/character/1').toPromise();
    pers.then(data=>{
      this.pers1 = data;
      var episode: any = this.pers1.episode.get(1);
      console.log(episode)
      this.goLocation(episode);
    })
  }

  getPersonnage1() {
    this.Http.get('https://rickandmortyapi.com/api/character/1').subscribe({
      next: (data) => { this.pers1 = data; console.log(this.pers1);},
      error: (err) => { console.log(err) }
    });
  }
  getPersonnage2() {
    this.Http.get('https://rickandmortyapi.com/api/character/2').subscribe({
      next: (data) => { this.pers2 = data; console.log(this.pers2);},
      error: (err) => { console.log(err) }
    });
  }

  goLocation(val:any){
    this.url = this.pers1.episode; 
    this.Http.get(val).subscribe({
      next: (data) => { this.location = data; console.log(this.location);},
      error: (err) => { console.log(err) }
    });
  }

  test(){

  }
}
