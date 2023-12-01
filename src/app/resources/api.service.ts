import { Injectable,ErrorHandler } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'

import { Food } from './models/Food';
import { User } from './models/User';
import { catchError, Observable } from 'rxjs';
import { Client } from './models/Client';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host = "http://localhost:8080/api/"

  //headers = { headers : {}}

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
options = { headers: this.headers };

  constructor(private http:HttpClient) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.username + ':' + user.password)
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    });
  this.options = { headers: this.headers };
  }


  getFoods(){
      return this.http.get<Food[]>(this.host + 'foods',this.options)
  }

  getFoodById(id :any){
    return this.http.get<any>(this.host + 'foods/' + id, this.options)
  }

  getIMC(id :any){
    return this.http.get<any>(this.host + 'foods/' + id, this.options)
  }

   getTMB(weight,height,age,gender){
    return  this.http.get(this.host + 'calculations/calculateTMB?' + 'weight=' + weight + '&height=' + height + '&age=' + age + '&gender=' + gender , this.options)
    //http://localhost:8080/api/calculations/calculateTMB?weight=65&height=160&age=23&gender=female
  }

  getUsers(){
    return this.http.get<User[]>(this.host + 'users' , this.options)
  }

/*   loginUser( username : string , password : string){
    return this.http.get<User>(this.host + 'users/login?'  + 'username=' + username + '&password=' + password , this.options)
  } */

  login(user:User){
    return this.http.post(this.host + 'users/login' ,JSON.stringify(user), {headers:{ 'Content-Type': 'application/json'}, responseType: 'text' })
  }

 /** POST: add a new hero to the database */
createUser(user: User) : Observable<User>{
  console.log(this.host + 'users/' )
  console.log("sending user: " + JSON.stringify(user));
  return this.http.post<User>("http://localhost:8080/api/users" , JSON.stringify(user), this.options)

}

getClientById(id){
  return this.http.get<User[]>(this.host + 'clients/getClientById?id='+id , this.options)
}


getClientByUserId(id){
  return this.http.get<User[]>(this.host + 'clients/getClientByUserId?userId='+id , this.options)
}


createClient(client :Client){
  return this.http.post<Client>(this.host + 'clients' , JSON.stringify(client), this.options)

}
}
