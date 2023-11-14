import { Component, OnInit, Output, EventEmitter, Input, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/resources/api.service';
import { ViewEncapsulation } from '@angular/core';
import { Food } from 'src/app/resources/models/Food';

@Component({
  selector: 'app-food-nav',
  templateUrl: './food-nav.component.html',
  styleUrls: ['./food-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FoodNavComponent implements OnInit {

  @Output() addFoodEvent = new EventEmitter<Food>();
  @Output() removeFoodEvent = new EventEmitter<Food>();

  @Input() loaded_data : Food[];

  type:any = "foodnav"

  foods :Food[] = []
  filtered_foods :Food[] = []
  searchTerm:any;

  selected_food:any;

  constructor(private apiService:ApiService,public dialogRef: MatDialogRef<FoodNavComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.foods=data;
    this.filtered_foods=data;
  }



  ngOnInit(): void {
  //  this.getFoods()

  }



  filter(){
    this.filtered_foods = this.foods.filter( (food :any) => (food.name.toLowerCase()).includes(this.searchTerm))
  }

  addFood(food:Food){
    this.addFoodEvent.emit(food)
  }

  removeFood(food:Food){
    this.removeFoodEvent.emit(food)
  }





}
