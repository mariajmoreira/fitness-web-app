import { Goal } from "./Goal";
import { Meal } from "./Meal";


export class Diet {
  id: number;
  user:string;
  name: string;
  goal:Goal;
  meals : Meal[];

}
