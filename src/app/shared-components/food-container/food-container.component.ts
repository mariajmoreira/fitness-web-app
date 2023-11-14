import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/app/resources/models/Food';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.css']
})
export class FoodContainerComponent implements OnInit{

  @Input() food : Food;
  @Input() type : any;

  updatedFood : Food = new Food();
  quantity :any;
  carbs:any;
  protein:any;
  fats:any;
  calories:any;

  @Output() selectedFood =  new EventEmitter<any>();
  @Output() foodToRemove =  new EventEmitter<any>();

  constructor(){

  }

  ngOnInit() :void{
    this.updatedFood.quantidade = this.food.quantidade
    this.calories=this.food.calories;
    this.carbs=this.food.carbs;
    this.protein=this.food.protein;
    this.fats=this.food.fats;
  }

  macroRecalculation(){
    console.log("recalculating")
    this.calories = ((this.food.quantidade) * (this.food.calories))/this.quantity
    this.carbs = (this.food.quantidade * (this.food.carbs))/this.quantity
    this.protein = (this.food.quantidade * (this.food.protein))/this.quantity
    this.fats = (this.food.quantidade * (this.food.fats))/this.quantity
  }

  sendFood(){
    this.food.calories = this.calories
    this.food.carbs = this.carbs
    this.food.protein = this.protein
    this.food.fats = this.fats
    this.selectedFood.emit(this.food)
  }

  removeFood(){
    this.foodToRemove.emit(this.food)
  }


}
