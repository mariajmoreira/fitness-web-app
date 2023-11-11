import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodNavComponent } from '../../food-nav/food-nav.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.css']
})
export class MealPlannerComponent implements OnInit{

  type:any='mealplanner'
  @Input() meal = '';

  @Output() removeMealEvent = new EventEmitter<string>();

  foods : any[] = [
     ];

  total_calories : number = 0;
  total_carbs : number = 0;
  total_fats : number= 0.0;
  total_protein : number = 0.0;

  constructor(private dialog: MatDialog){

  }


  ngOnInit(): void {
      this.calculateTotalMacros()
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
    });

    const sub=dialogRef.componentInstance.addFoodEvent.subscribe((food) => {
      this.foods.push(food)
      this.calculateTotalMacros()
    })
  }

 calculateTotalMacros(){
  this.total_calories=0
  this.total_carbs=0
  this.total_protein=0
  this.total_fats=0
  console.log("parsed carbs : " + this.foods[0].carbs)
  for(let i=0;i<this.foods.length;i++){
    this.total_calories=this.total_calories + (this.foods[i].calories)
    this.total_carbs=this.total_carbs + parseFloat(this.foods[i].carbs.replace(/,/, '.'))
    this.total_fats=this.total_fats + parseFloat(this.foods[i].fats.replace(/,/, '.'))
    this.total_protein=this.total_protein + parseFloat(this.foods[i].protein.replace(/,/, '.'))
    console.log(" cals : " + this.total_calories + " / carbs : " + this.total_carbs + " / fats : " + this.total_fats + " / protein : " + this.total_protein)
  }
  }


}
