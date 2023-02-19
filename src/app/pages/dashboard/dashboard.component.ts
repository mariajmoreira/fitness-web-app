import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  client : Client = new Client();


  constructor() { }

  ngOnInit(): void {
  }

  taxaMetabolicaBasal(){
    let taxa : number = 0;
    if(this.client.genero=='homem'){
      alert("é homem")
      taxa = 66.5+ (13.75 * this.client.peso) + (5*this.client.altura)-(6.8*this.client.idade)
    }
    else if(this.client.genero=='mulher'){
      alert("é mulher")
      taxa = 665.1+ (9.56 * this.client.peso) + (1.8*this.client.altura)-(4.7*this.client.idade)
    }
    else{
      console.error("genero errado");
    }
    this.client.taxaMetabolicaBasal=taxa
  }

}
