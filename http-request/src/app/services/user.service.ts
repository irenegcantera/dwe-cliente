import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userArray: User[];

  constructor(private http:HttpClient) {
      this.userArray = [];
  }

  get(){
    this.http.get<any>('https://reqres.in/api/users')
    .subscribe(dataHttp => {
      let i = 0;
      for(let data of dataHttp.data){
        const user = new User(data.first_name,"NULL");
        this.userArray.push(user);
      }
    });
    return this.userArray;
  }

  post(user:User){
    this.http.post('https://reqres.in/api/users',user)
    .subscribe(response => {
      this.userArray.push(user);
    })
  }

}
