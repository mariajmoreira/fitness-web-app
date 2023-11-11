import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.css']
})
export class FoodContainerComponent implements OnInit{

  @Input() food : any;
  @Input() type : any;
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
    this.quantity = this.food.quantidade
    this.calories=this.food.calories;
    this.carbs=this.food.carbs.replace(/,/, '.');
    this.protein=this.food.protein.replace(/,/, '.');
    this.fats=this.food.fats.replace(/,/, '.');
  }

  macroRecalculation(){
    console.log("recalculating")
    this.calories = (parseFloat(this.food.quantidade) * parseFloat(this.food.calories))/this.quantity
    this.carbs = (this.food.quantidade * parseFloat(this.food.carbs.replace(/,/, '.')))/this.quantity
    this.protein = (this.food.quantidade * parseFloat(this.food.protein.replace(/,/, '.')))/this.quantity
    this.fats = (this.food.quantidade * parseFloat(this.food.fats.replace(/,/, '.')))/this.quantity
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
