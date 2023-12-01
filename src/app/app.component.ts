import { MatDialog } from '@angular/material/dialog';
import { FoodNavComponent } from './components/food-nav/food-nav.component';
import { ApiService } from './resources/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from './resources/models/User';
import { Diet } from './resources/models/Diet';
import { Meal } from './resources/models/Meal';
import { Food } from './resources/models/Food';
import { Goal } from './resources/models/Goal';
import { Observable } from 'rxjs';
import { Client } from './resources/models/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
