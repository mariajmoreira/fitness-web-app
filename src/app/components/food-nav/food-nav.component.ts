import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/resources/api.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-food-nav',
  templateUrl: './food-nav.component.html',
  styleUrls: ['./food-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FoodNavComponent implements OnInit {

  @Output() addFoodEvent = new EventEmitter<string>();
  @Output() removeFoodEvent = new EventEmitter<string>();

  type:any = "foodnav"

  foods :any = []
  filtered_foods :any = []
  searchTerm:any;

  selected_food:any;

  constructor(private apiService:ApiService,public dialogRef: MatDialogRef<FoodNavComponent>) {}



  ngOnInit(): void {
    this.getFoods()

  }

  getFoods(){
    this.apiService.getFoods().subscribe(
      {
        next: (response:any) => {
          this.foods = response;
          this.filtered_foods = this.foods
        },
        error: (err) => {
          alert(JSON.stringify(err))
        }
      }
    )

  }

  filter(){
    this.filtered_foods = this.foods.filter( (food :any) => (food.name.toLowerCase()).includes(this.searchTerm))
  }

  addFood(food:any){
    this.addFoodEvent.emit(food)
  }

  removeFood(food:any){
    this.removeFoodEvent.emit(food)
  }





}
