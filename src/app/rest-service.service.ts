import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  url='http://localhost:3000/restaurants';
  rootUrl= "http://localhost:3000/";

  constructor(private _http:HttpClient) { }
  getList(){
    return this._http.get(this.url);
     }
  postUserValues(data){
      return this._http.post(this.url, data)
  }
  deleteResto(id){
    return this._http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id){
    return this._http.get(`${this.url}/${id}`)// you can make changes but can not update in database.
  }
  updateResto(id, data){
    return this._http.put(`${this.url}/${id}`, data)
  }
  registerUser(data){
    return this._http.post(this.rootUrl+"users", data)
  }
}
