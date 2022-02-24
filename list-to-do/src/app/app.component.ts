import { Component } from '@angular/core';
import { Tarea } from './model/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO-DO LIST';

  public tareas:Tarea[] = [];
  public tarea:any;

  public task:string = "";
  public limit:string = "";

  public addTarea(){
    this.tarea = new Tarea(this.task,this.limit);
    this.tareas.push(this.tarea);
    this.task = "";
    this.limit = "";
  }

}
