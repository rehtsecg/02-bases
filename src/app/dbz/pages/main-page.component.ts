import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector:'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {


 constructor( private DbzService:DbzService) {}

get characters():Character[] {
  return this.DbzService.characters;
 }

 onDeleteCharacter(id:string):void {
   this.DbzService.delelteCharecterById(id); // eliminar un personaje por el id
 }

 onNewCharacter(character:Character):void {
   this.DbzService.addCharacter(character); // crear un nuevo personaje
 }
}
