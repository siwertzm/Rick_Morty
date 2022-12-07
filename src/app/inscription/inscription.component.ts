import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  constructor(private Http: HttpClient, private route: Router){



  }

  inscription(val: any){
    this.Http.post('http://localhost:8280/user',val).subscribe({
      next: (data)=> { this.route.navigateByUrl('login'); },
      error: (err)=> {console.log(err)}
    });
  }

}
