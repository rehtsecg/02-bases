import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

 @Output() // decorador para emitir eventos
  public onNewCharacter:EventEmitter<Character> = new EventEmitter(); // evento que emite un objeto de tipo Character

  public Character: Character = {

    name: '',
    power: 0
  }

   emitCharacter(): void {


     if(this.Character.name.trim().length === 0) {
      console.log('Name is required');
       return;
     }
     this.onNewCharacter.emit(this.Character);

    this.Character = {
      // limpiar el formulario
      name: '',
      power: 0
    }
   }

}

