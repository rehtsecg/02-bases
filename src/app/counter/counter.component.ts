import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3> Contador : {{ counter }} </h3>

    <button (click)="increaseby(1)">+1</button>
    <button (click)="resetCounter()">  Reset</button>
    <button  (click)="increaseby(-1)">-1</button >
    `,
})

export class CounterComponent  {


    public counter: number = 10;

    increaseby(value:number):void{

       this.counter+=value;

    }
    resetCounter(){

      this.counter= 10;
    }

}
