import { Component } from '@angular/core';

@Component({
  selector:'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  public name:string = 'Goku';

  get upperName():string{
    return this.name.toUpperCase();
  }
}
