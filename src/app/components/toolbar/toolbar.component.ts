import { Component, EventEmitter, Output,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/resources/api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input() goal;
  @Input() user;

  protein :number=0;
  fats :number=0;
  carbs :number=0;
  calories:number=0;

  @Output() calorieSetEvent = new EventEmitter<number>();
  @Output() proteinSetEvent = new EventEmitter<number>();
  @Output() carbsSetEvent = new EventEmitter<number>();
  @Output() fatsSetEvent = new EventEmitter<number>();

  panelOpenState = false;

  tmb$?: Observable<any>

  constructor(private apiService:ApiService){

  }

  ngOnInit(){
   this.tmb$= this.apiService.getTMB('65', '160', '23', 'female')
  }

    calculateTMB(){
    /* this.apiService.getTMB('65', '160', '23', 'female').subscribe(
      (response)=>{
        console.log(`response:` + JSON.stringify(response));
        this.tmb$=response
      }
    ) */

  }

  sendDietInfo(){
    this.calorieSetEvent.emit(this.calories)
    this.proteinSetEvent.emit(this.protein)
    this.carbsSetEvent.emit(this.carbs)
    this.fatsSetEvent.emit(this.fats)
  }


}
