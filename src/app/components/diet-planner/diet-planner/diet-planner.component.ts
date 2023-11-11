import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diet-planner',
  templateUrl: './diet-planner.component.html',
  styleUrls: ['./diet-planner.component.css']
})
export class DietPlannerComponent {

  meals : any[] = [1];
  number_of_meals = 1;

  addMeal(){
    this.number_of_meals+=1
    this.meals=[]
    for(let i=0; i<this.number_of_meals; i++){
      this.meals.push(i+1);
    }
  }

  removeMeal(meal:any){
    this.number_of_meals=this.number_of_meals-1
    this.meals=[]
    for(let i=0; i<this.number_of_meals; i++){
      this.meals.push(i+1);
    }
  }

}
