import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deleteHero?:string  ;// undifined
  //public deleteHero:string=''; tambien sirve


  removeLastHero():void{ //no return

    this.deleteHero=this.heroNames.pop();


}

}
