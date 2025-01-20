import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title :string  = 'Hola mundo';
  public counter: number = 10;

  increaseby(value:number):void{

     this.counter+=value;

  }
  resetCounter(){

    this.counter= 10;
  }
}
