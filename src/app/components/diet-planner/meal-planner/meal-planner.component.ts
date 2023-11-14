import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodNavComponent } from '../../food-nav/food-nav.component';
import { MatDialog } from '@angular/material/dialog';
import { Food } from 'src/app/resources/models/Food';
import { ApiService } from 'src/app/resources/api.service';
import { Meal } from 'src/app/resources/models/Meal';
import  data from 'src/app/resources/jsons/foods.json';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.css']
})
export class MealPlannerComponent implements OnInit{

  type:any='mealplanner'
  @Input() loaded_food : Food[]
  @Input() meal : Meal;


  @Output() removeMealEvent = new EventEmitter<Meal>();

  //loaded_food : Food[]=[];

  foods : Food[] = [
     ];

  total_calories : number = 0;
  total_carbs : number = 0;
  total_fats : number= 0.0;
  total_protein : number = 0.0;


  constructor(private dialog: MatDialog,private apiService:ApiService){

  }


  ngOnInit(): void {
   // alert(JSON.stringify(this.meal))
   // this.getFoods()

  }

  getFoods(){
    this.apiService.getFoods().subscribe(
      {
        next: (response:any) => {
          this.loaded_food = response;
          this.calculateTotalMacros()
          //alert(JSON.stringify(this.loaded_food))
         // this.filtered_foods = this.foods
        },
        error: (err) => {
          alert(JSON.stringify(err))
        }
      }
    )

  }

removeMeal(){
  this.removeMealEvent.emit(this.meal)
}


 removeFood(food:any){
  /* for(let i=0;i<this.foods.length;i++){
    if(this.foods[i].id == food.id){
      this.foods.splice()
    }
  } */
  let index = this.foods.indexOf(food)
  this.foods.splice(index,1);
  this.calculateTotalMacros();
 }


  openModal(){
    let dialogRef = this.dialog.open(FoodNavComponent, {
      height: '600px',
      width:'800px',
      panelClass: 'custom-dialog',
      data: this.loaded_food
    });

    const sub=dialogRef.componentInstance.addFoodEvent.subscribe((food) => {
      this.meal.foods.push(food)
      this.calculateTotalMacros()
    })
  }

 calculateTotalMacros(){
  this.total_calories=0
  this.total_carbs=0
  this.total_protein=0
  this.total_fats=0
  //console.log("parsed carbs : " + this.foods[0].carbs + 0)
  for(let i=0;i<this.foods.length;i++){
    this.total_calories=this.total_calories + (this.foods[i].calories)
    this.total_carbs=this.total_carbs + this.foods[i].carbs
    this.total_fats=this.total_fats + this.foods[i].fats
    this.total_protein=this.total_protein + this.foods[i].protein
    console.log(" cals : " + this.total_calories + " / carbs : " + this.total_carbs + " / fats : " + this.total_fats + " / protein : " + this.total_protein)
  }
  }


}
