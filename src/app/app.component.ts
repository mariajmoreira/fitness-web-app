import { MatDialog } from '@angular/material/dialog';
import { FoodNavComponent } from './components/food-nav/food-nav.component';
import { ApiService } from './resources/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from './resources/models/User';
import { Diet } from './resources/models/Diet';
import { Meal } from './resources/models/Meal';
import { Food } from './resources/models/Food';
import { Goal } from './resources/models/Goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fitness-web-app';

  foods :any = []

  food1 : Food= {
      id: 624,
      name: "Abacate",
      category: "Frutos e produtos derivados de frutos",
      calories:'114',
      carbs: '2.3',
      protein: '1.1',
      fats: '10.5',
      quantidade: '100'
    }

    food2 : Food= {
      id: 624,
      name: "Arroz",
      category: "Carbohidrato simples",
      calories:'114',
      carbs: '2.3',
      protein: '1.1',
      fats: '10.5',
      quantidade: '100'
    }

    food3: Food= {
      id: 624,
      name: "Frango",
      category: "Carne",
      calories:'114',
      carbs: '2.3',
      protein:' 1.1',
      fats: '10.5',
      quantidade: '100'
    }


  meal1 :Meal={
    name: `1ª Refeição`,
    id: 1,
    foods : [this.food1, this.food2, this.food3]
  }

  meal2 :Meal={
    name: `2ª Refeição`,
    id: 2,
    foods : [this.food1, this.food2, this.food3]
  }

  goal:Goal={
    protein:140,
    carbs:140,
    fats:40,
    calories:1500
  }

  diet: Diet = {
    name: `Dieta 1ª Mês`,
    user:'Carolina',
    id: 1,
    goal:this.goal,
    meals : [this.meal1,this.meal2]
  }

  user : User =  {
    name: `Carolina`,
    id: 0,
    type: 2,
    diet : this.diet
  };

 public loaded_food : Food[] = [];

  constructor(private apiService:ApiService,private dialog: MatDialog){

  }

  ngOnInit(){
    this.getFoods();
  }

  getFoods(){
    this.apiService.getFoods().subscribe(
      {
        next: (response:any) => {
          this.loaded_food = response;
       //   this.calculateTotalMacros()
          //alert(JSON.stringify(this.loaded_food))
         // this.filtered_foods = this.foods
        },
        error: (err) => {
          alert(JSON.stringify(err))
        }
      }
    )

  }





}
