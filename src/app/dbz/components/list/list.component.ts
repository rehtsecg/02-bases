import { Component, Input ,Output , EventEmitter} from '@angular/core';
import{ Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Input() // decorador para recibir datos
  public characterList:Character[] = [{

    name:'Thurnk',
    power:10}];


// onDelete evento que vamos a emitir el index del personaje a eliminar
@Output() // decorador para emitir eventos
public onDeleteEvent:EventEmitter<string>= new EventEmitter();
// eliminar un personaje

emitIndex(id?:string):void
{
   if(!id)  return;
   console.log( 'desde list' ,id);
   this.onDeleteEvent.emit(id);
}


}
