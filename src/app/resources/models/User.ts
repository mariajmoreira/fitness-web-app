import { Diet } from "./Diet";

export class User {
  id: number;
  username: string;
  email:string;
  password:string;
  status:string;
  role:string;

  constructor(id,username,email,password,status,role){
    this.id=id,
    this.username=username,
    this.email=email,
    this.password=password,
    this.status=status,
    this.role=role
      }



}
