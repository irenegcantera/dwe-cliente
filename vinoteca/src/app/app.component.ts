import { Component } from '@angular/core';
import { Vino } from './model/vino.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vinos:Vino[] = [new Vino("Casa Castillo", 5.89)];
  vino:any;

  name:string="";
  pvp:number=0;

  addVino(){
    this.vino = new Vino(this.name, this.pvp);
    this.vinos.push(this.vino);
    this.name="";
    this.pvp=0;
  }

}
