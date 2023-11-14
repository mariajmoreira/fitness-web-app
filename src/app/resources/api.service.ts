import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Food } from './models/Food';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host = "http://localhost:8080/api/"

  headers = { headers : {}}

  constructor(private http:HttpClient) { }


  getFoods(){
    return this.http.get<Food[]>(this.host + 'foods',this.headers)
  }

  getFoodById(id :any){
    return this.http.get<any>(this.host + 'foods/' + id, this.headers)
  }
}
