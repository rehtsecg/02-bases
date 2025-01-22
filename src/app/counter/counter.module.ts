import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';



@NgModule({// agrupar toda la funcionalidad de counter

declarations: [
  CounterComponent
],
exports:[
   CounterComponent
]

})

export class CounterModule{ }
