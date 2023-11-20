import { Goal } from './../../../resources/models/Goal';
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
  styleUrls: ['./meal-planner.component.css','../../../app.component.css']
})
export class MealPlannerComponent implements OnInit{

  type:any='mealplanner'
  @Input() loaded_food : Food[]
  @Input() meal : Meal;
  @Input() meal_index : number;

  @Output() removeMealEvent = new EventEmitter<Meal>();

  @Output() setMealGoal = new EventEmitter<any[]>();


  foods : Food[] = [
     ];

  goal: Goal=new Goal();

  meal_macros = [];

  total_calories : number = 0;
  total_carbs : number = 0;
  total_fats : number= 0.0;
  total_protein : number = 0.0;

  editMealName=true;


  constructor(private dialog: MatDialog,private apiService:ApiService){

  }


  ngOnInit(): void {
    if(this.meal==undefined){
      this.meal=new Meal();
    }
     /* alert(JSON.stringify(this.meal)) */
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


 removeFood(food:Food){
  /* for(let i=0;i<this.foods.length;i++){
    if(this.foods[i].id == food.id){
      this.foods.splice()
    }
  } */
  let index = this.foods.indexOf(food)
  this.meal.foods.splice(index,1);
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
  //Math.round()
  this.total_calories=0
  this.total_carbs=0
  this.total_protein=0
  this.total_fats=0
  //console.log("parsed carbs : " + this.foods[0].carbs + 0)
  for(let i=0;i<this.meal.foods.length;i++){
    this.total_calories=this.total_calories + parseFloat(this.meal.foods[i].calories.replace(/,/g,'.'))
    this.total_carbs=this.total_carbs + parseFloat(this.meal.foods[i].carbs.replace(/,/g,'.'))
    this.total_fats=this.total_fats + parseFloat(this.meal.foods[i].fats.replace(/,/g,'.'))
    this.total_protein=this.total_protein + parseFloat(this.meal.foods[i].protein.replace(/,/g,'.'))
    console.log(" cals : " + this.total_calories + " / carbs : " + this.total_carbs + " / fats : " + this.total_fats + " / protein : " + this.total_protein)
  }

/*   this.goal.calories=Math.round(this.total_calories)
  this.goal.protein=Math.round(this.total_protein)
  this.goal.carbs=Math.round(this.total_carbs)
  this.goal.fats=Math.round(this.total_fats) */
this.meal_macros=[]
  this.meal_macros.push(this.meal_index)
  this.meal_macros.push(Math.round(this.total_calories))
  this.meal_macros.push(Math.round(this.total_protein))
  this.meal_macros.push(Math.round(this.total_carbs))
  this.meal_macros.push(Math.round(this.total_fats))

  console.log("meal macros : "+JSON.stringify(this.meal_macros))
  this.setMealGoal.emit(this.meal_macros)
  }


}
