import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private _user: User;
  private _message:number = 0; // nada

  constructor(private userService: UserService) { 
    this._user = new User("","");
  }

  ngOnInit(): void { 
  }

  public get getUser(): User {
    return this._user;
  }
  public set setUser(value: User) {
    this._user = value;
  }

  public get getMessage():number {
    return this._message;
  }

  send(name:HTMLInputElement,job:HTMLInputElement){
    if(job.value != "" && name.value != ""){
      this._user = new User(name.value,job.value);
      this.userService.post(this._user);
      this._message = 1; // success
    }else{
      this._message = 2; // error
    }
    
    name.value = "";
    job.value = "";

  }

}
