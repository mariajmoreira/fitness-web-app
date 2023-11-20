import { Diet } from './../../../resources/models/Diet';
import { Component, EventEmitter, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Food } from 'src/app/resources/models/Food';
import { Goal } from 'src/app/resources/models/Goal';
import { Meal } from 'src/app/resources/models/Meal';

@Component({
  selector: 'app-diet-planner',
  templateUrl: './diet-planner.component.html',
  styleUrls: ['./diet-planner.component.css', '../../../app.component.css']
})
export class DietPlannerComponent {

  @Input() goal : Goal;

  current:Goal = {
    calories:0,
    protein:0,
    carbs:0,
    fats:0
  };

  @Input() loaded_food : Food[];
  meals : Meal[] = [];
  meals_macros = [];
  number_of_meals = 1;

  newDiet: Diet = new Diet();
  editDietName=true;

  //progress bar
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 0;
  bufferValue = 75;

  ngOnInit(){
    if(this.meals.length==0){
      let meal : Meal = new Meal();
      this.meals.push(meal);
    }

  }

  addMeal(){
    this.number_of_meals+=1
    let meal : Meal = new Meal();
      this.meals.push(meal);

  }

  removeMeal(meal:Meal){
    this.number_of_meals=this.number_of_meals-1
    let index = this.meals.indexOf(meal)
    this.meals.splice(index,1)
    /* for(let i=0; i<this.number_of_meals; i++){
      this.meals.push(i+1);
    } */
  }

  receiveMealGoal(event){

/*     this.current.calories=0
    this.current.protein=0
    this.current.carbs=0
    this.current.fats=0 */

    console.log("event: " + JSON.stringify(event))
/*     this.current.calories+=event.calories
    this.current.protein+=event.protein
    this.current.carbs+=event.carbs
    this.current.fats+=event.fats

    this.value = ((this.current.calories/this.goal.calories)*100) */

    let meal_macros = []
for(let i=1; i<event.length;i++){
  meal_macros.push(event[i])
}

    this.meals_macros[event[0]] =meal_macros
    console.log("meals_macros: " + JSON.stringify(this.meals_macros))

/*     for(let i=0;i<this.meals_macros.length;i++){
    this.current.calories+=this.meals_macros[i][0]
    this.current.protein+=this.meals_macros[i][1]
    this.current.carbs+=this.meals_macros[i][2]
    this.current.fats+=this.meals_macros[i][3]
    }
    console.log("current: " + JSON.stringify(this.current)) */

    let calories=0
    let protein=0
    let carbs=0
    let fats=0

    for(let i=0;i<this.meals_macros.length;i++){
      calories+=this.meals_macros[i][0]
      protein+=this.meals_macros[i][1]
     carbs+=this.meals_macros[i][2]
      fats+=this.meals_macros[i][3]
    }
    this.current.calories=calories
    this.current.protein=protein
    this.current.carbs=carbs
    this.current.fats=fats

    this.value = ((this.current.calories/this.goal.calories)*100)
    console.log("current: " + JSON.stringify(this.current))
  }

  ngOnChanges(){

    let calories=0
    let protein=0
    let carbs=0
    let fats=0

    for(let i=0;i<this.meals_macros.length;i++){
      calories+=this.meals_macros[i][0]
      protein+=this.meals_macros[i][1]
     carbs+=this.meals_macros[i][2]
      fats+=this.meals_macros[i][3]
    }
    this.current.calories=calories
    this.current.protein=protein
    this.current.carbs=carbs
    this.current.fats=fats

    console.log("current: " + JSON.stringify(this.current))
    this.value = ((this.current.calories/this.goal.calories)*100)
  }

}
