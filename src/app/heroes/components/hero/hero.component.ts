import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string="ironman";
  public age:number=45;

 get capitalizaName():string{
  return this.name.toUpperCase();

 }
 getHeroDescription():string{  // metodo

   return `${this.name} - ${this.age}`;
   //return this.name +'-'+this.age.toString() ;
 }
 changeHero():void{
     this.name='Spiderman';
 }


 changeAge():void{
   this.age= 25;

 }

 resetForm():void{ // no regresa nada

    this.name='iroman';
    this.age= 45;
 }
}
