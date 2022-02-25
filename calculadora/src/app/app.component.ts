import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  
  number1 = 0;
  number2 = 0;
  result = 0;
  error = "";

  sumar() {
    this.result =  this.number1 + this.number2;
  }

  restar() {
    this.result = this.number1 - this.number2;
  }

  multiplicar() {
    this.result = this.number1 * this.number2;
  }

  dividir() {
    if(this.number1 > 0 && this.number2 == 0){
      this.error =  "No se puede dar un resultado porque da infinito!!!!!!";
    }else{
      this.result = this.number1 / this.number2;
      this.error = "";
    }
  }

}
