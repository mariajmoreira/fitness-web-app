import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/app/resources/models/Food';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.css','../../app.component.css']
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

  isIconPlus: boolean = true;

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
    this.calories = (parseFloat(this.food.quantidade.replace(/,/g,'.')) * parseFloat(this.food.calories.replace(/,/g,'.')))/this.quantity
    this.carbs = (parseFloat(this.food.quantidade.replace(/,/g,'.')) * parseFloat(this.food.carbs.replace(/,/g,'.')))/this.quantity
    this.protein = (parseFloat(this.food.quantidade.replace(/,/g,'.')) * parseFloat(this.food.protein.replace(/,/g,'.')))/this.quantity
    this.fats = (parseFloat(this.food.quantidade.replace(/,/g,'.')) * parseFloat(this.food.fats.replace(/,/g,'.')))/this.quantity
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

  toggleIcon() {
    this.isIconPlus = !this.isIconPlus;
    if(!this.isIconPlus){
      this.sendFood()
    }
  }

}
