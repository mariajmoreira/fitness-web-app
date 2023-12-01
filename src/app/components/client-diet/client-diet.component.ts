import { Client } from 'src/app/resources/models/Client';
import { Diet } from './../../resources/models/Diet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-diet',
  templateUrl: './client-diet.component.html',
  styleUrls: ['./client-diet.component.css']
})
export class ClientDietComponent {

  @Input() diet:Diet;


  @Input() client:Client;



  ngOnInit(){
   // this.diet = this.user.diet
    //alert(JSON.stringify(this.user))

  }
}
