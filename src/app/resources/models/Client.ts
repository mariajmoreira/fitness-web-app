import { Diet } from "./Diet";

export class Client {
  id: number;
  userid:number;
  firstname: string;
  lastname:string ;
  type:string;
  gender:string;
  height:number;
  weight:number;
  birthdate:Date;
  //diet: Diet;

  constructor(id,userid, firstname, lastname, weight, height, gender, birthdate,type){
    this.id=id
    this.userid = userid
    this.firstname = firstname
    this.lastname=lastname,
    this.weight=weight,
    this.height=height,
    this.gender=gender,
    this.birthdate=birthdate,
    this.type=type

  }

}
