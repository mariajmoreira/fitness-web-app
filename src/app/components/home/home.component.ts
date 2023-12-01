import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Food } from 'src/app/resources/models/Food';
import { Meal } from 'src/app/resources/models/Meal';
import { Goal } from 'src/app/resources/models/Goal';
import { Client } from 'src/app/resources/models/Client';
import { ApiService } from 'src/app/resources/api.service';
import { Diet } from 'src/app/resources/models/Diet';
import { User } from 'src/app/resources/models/User';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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






/*   client : Client =  {
    name: `Carolina`,
    id: 0,
    userid:0,
    type: 2,
    gender:'female',
    height:1.77,
    weight:73,
    age:19,
    diet : this.diet
  }; */
  client:Client;

  user:User;


 public loaded_food : Food[]

  constructor(private apiService:ApiService,private dialog: MatDialog){

  }

  ngOnInit(){
    //ir buscar comidas
    this.getFoods()

    //ir buscar o cliente inerente ao utilizador
    this.getClientByUserId()
   // this.user = new User(userData.id,userData.name,userData.email,userData.password,userData.status);
    console.log("user from local storage: " + JSON.stringify(this.user))
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

  getClientByUserId(){
      //ir buscar info do user ao localStorage
      this.user =JSON.parse(localStorage.getItem('user'))
    this.apiService.getClientByUserId(this.user.id).subscribe(
      {
        next: (response:any) => {
          this.client = response;
       //   this.calculateTotalMacros()d
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
