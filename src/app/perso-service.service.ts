import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersoServiceService {

  constructor() { }

  setPerso(perso:any){
    localStorage.setItem('perso', JSON.stringify(perso));
  }

  getPerso(){
    let perso: any = localStorage.getItem('perso');
    return JSON.parse(perso);
  }
}
