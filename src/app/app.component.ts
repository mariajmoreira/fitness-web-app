import { MatDialog } from '@angular/material/dialog';
import { FoodNavComponent } from './components/food-nav/food-nav.component';
import { ApiService } from './resources/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fitness-web-app';

  foods :any = []

  constructor(private apiService:ApiService,private dialog: MatDialog){

  }

  ngOnInit(){

  }



}
