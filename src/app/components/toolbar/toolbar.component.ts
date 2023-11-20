import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input() goal;

  protein :number=0;
  fats :number=0;
  carbs :number=0;
  calories:number=0;

  @Output() calorieSetEvent = new EventEmitter<number>();
  @Output() proteinSetEvent = new EventEmitter<number>();
  @Output() carbsSetEvent = new EventEmitter<number>();
  @Output() fatsSetEvent = new EventEmitter<number>();


  sendDietInfo(){
    this.calorieSetEvent.emit(this.calories)
    this.proteinSetEvent.emit(this.protein)
    this.carbsSetEvent.emit(this.carbs)
    this.fatsSetEvent.emit(this.fats)
  }


}
