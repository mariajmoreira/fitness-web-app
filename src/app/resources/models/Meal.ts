import { Food } from "./Food";


export class Meal {
  id: number;
  name: string;
  foods:Food[];

  constructor(){
    this.name='';
    this.foods= [];
  }
}
