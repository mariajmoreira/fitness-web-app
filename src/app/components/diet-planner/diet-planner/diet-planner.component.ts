import { Component, EventEmitter, Input } from '@angular/core';
import { Food } from 'src/app/resources/models/Food';
import { Meal } from 'src/app/resources/models/Meal';

@Component({
  selector: 'app-diet-planner',
  templateUrl: './diet-planner.component.html',
  styleUrls: ['./diet-planner.component.css']
})
export class DietPlannerComponent {

  @Input() loaded_food : Food[];
  meals : Meal[] = [];
  number_of_meals = 0;

  addMeal(){
    this.number_of_meals+=1
    let meal : Meal = new Meal();
    for(let i=0; i<this.number_of_meals; i++){
      this.meals.push(meal);
    }
  }

  removeMeal(meal:Meal){
    this.number_of_meals=this.number_of_meals-1
    let index = this.meals.indexOf(meal)
    this.meals.splice(index,1)
    /* for(let i=0; i<this.number_of_meals; i++){
      this.meals.push(i+1);
    } */
  }

}
