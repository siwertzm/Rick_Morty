import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.css']
})
export class AmiComponent {

  constructor(private route: Router){

  }

  GoTo(){
    this.route.navigateByUrl('user');

  }

}
