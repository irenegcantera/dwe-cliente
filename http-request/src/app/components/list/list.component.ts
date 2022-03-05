import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _users: any[];
  
  constructor(private userService: UserService) {
    this._users = this.userService.get();
  }

  ngOnInit(): void {
  }

  public get getUsers(): any[] {
    return this._users;
  }
  public set setUsers(value: any[]) {
    this._users = value;
  }
  



}
